'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

// Phaser loads ONLY after the visitor presses play — zero cost on page load.
export default function PlayableGame() {
  const hostRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<any>(null);
  const [state, setState] = useState<'poster' | 'loading' | 'playing'>('poster');

  const start = useCallback(async () => {
    if (gameRef.current || !hostRef.current) return;
    setState('loading');
    const Phaser = await import('phaser');

    class CollectScene extends Phaser.Scene {
      private player!: any;
      private orbs!: any;
      private score = 0;
      private timeLeft = 45;
      private scoreText!: any;
      private timeText!: any;
      private over = false;
      constructor() { super('collect'); }

      create() {
        const w = this.scale.width;
        const h = this.scale.height;
        this.over = false;
        this.score = 0;
        this.timeLeft = 45;
        this.cameras.main.setBackgroundColor('#141110');

        // floor
        const floor = this.add.rectangle(w / 2, h - 14, w, 28, 0x1d1917);
        this.physics.add.existing(floor, true);

        // player: gold square
        this.player = this.add.rectangle(60, h - 80, 26, 26, 0xd9a441);
        this.physics.add.existing(this.player);
        const body = this.player.body as Phaser.Physics.Arcade.Body;
        body.setCollideWorldBounds(true);
        this.physics.add.collider(this.player, floor);

        // orbs
        this.orbs = this.physics.add.group();
        const spawn = () => {
          const x = Phaser.Math.Between(30, w - 30);
          const y = Phaser.Math.Between(50, h - 120);
          const o = this.add.circle(x, y, 9, 0x5fa99c);
          this.orbs.add(o);
          (o as any).body.setCircle(9);
          this.tweens.add({ targets: o, y: y + 12, duration: 800, yoyo: true, repeat: -1, ease: 'sine.inout' });
        };
        for (let i = 0; i < 6; i++) spawn();

        this.scoreText = this.add.text(14, 10, 'SCORE 0', { fontSize: '14px', color: '#d9a441', fontFamily: 'monospace' });
        this.timeText = this.add.text(w - 14, 10, '45s', { fontSize: '14px', color: '#a89f8d', fontFamily: 'monospace' }).setOrigin(1, 0);

        this.physics.add.overlap(this.player, this.orbs, (_p: any, o: any) => {
          if (this.over) return;
          o.destroy();
          this.score += 10;
          this.scoreText.setText(`SCORE ${this.score}`);
          spawn();
        });

        // pointer steering: hold / tap to move, tap player to jump
        this.input.on('pointerdown', (ptr: any) => {
          if (this.over) return;
          const b = this.player.body as Phaser.Physics.Arcade.Body;
          if (ptr.x < this.player.x - 20) b.setVelocityX(-260);
          else if (ptr.x > this.player.x + 20) b.setVelocityX(260);
          if (b.blocked.down) b.setVelocityY(-430);
        });
        this.input.on('pointerup', () => {
          (this.player.body as Phaser.Physics.Arcade.Body).setVelocityX(0);
        });
        this.input.keyboard?.on('keydown-LEFT', () => body.setVelocityX(-260));
        this.input.keyboard?.on('keydown-RIGHT', () => body.setVelocityX(260));
        this.input.keyboard?.on('keyup-LEFT', () => body.setVelocityX(0));
        this.input.keyboard?.on('keyup-RIGHT', () => body.setVelocityX(0));
        this.input.keyboard?.on('keydown-UP', () => { if (body.blocked.down) body.setVelocityY(-430); });
        this.input.keyboard?.on('keydown-SPACE', () => { if (body.blocked.down) body.setVelocityY(-430); });

        this.time.addEvent({ delay: 1000, repeat: 44, callback: () => {
          this.timeLeft -= 1;
          this.timeText.setText(`${this.timeLeft}s`);
          if (this.timeLeft <= 0) {
            this.over = true;
            this.physics.pause();
            this.add.text(w / 2, h / 2 - 10, `TIME UP — ${this.score} PTS`, {
              fontSize: '22px', color: '#ece4d4', fontFamily: 'monospace',
            }).setOrigin(0.5);
            this.add.text(w / 2, h / 2 + 22, 'Need a full game? Talk to me on Telegram.', {
              fontSize: '13px', color: '#a89f8d', fontFamily: 'monospace',
            }).setOrigin(0.5);
          }
        }});
      }
    }

    const game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: hostRef.current,
      width: 720,
      height: 400,
      backgroundColor: '#141110',
      physics: { default: 'arcade', arcade: { gravity: { x: 0, y: 900 }, debug: false } },
      scene: [CollectScene],
    });
    gameRef.current = game;
    setState('playing');
  }, []);

  useEffect(() => {
    return () => { try { gameRef.current?.destroy(true); } catch {} };
  }, []);

  return (
    <div className="game-shell">
      <div className="game-bar">
        <span><span className="live">● </span>Phaser 4.2.1 — 45 seconds, collect the orbs</span>
        <span>touch · mouse · arrows</span>
      </div>
      <div className="game-stage">
        <div ref={hostRef} role="img" aria-label="Playable Phaser game: collect orbs before time runs out" />
        {state !== 'playing' && (
          <div className="game-poster">
            <p>{state === 'loading' ? 'Loading game engine…' : 'The engine loads only when you press play. No megabyte tax on first visit.'}</p>
            {state === 'poster' && (
              <button className="btn btn-primary" onClick={start} type="button">
                Play the demo
                <svg className="arrow" viewBox="0 0 16 8" fill="currentColor" aria-hidden="true"><path d="M0 3.5h13L10 0l1-0 5 4-5 4-1 0 3-3.5H0z" /></svg>
              </button>
            )}
          </div>
        )}
      </div>
      <p className="game-note">Built with Phaser 4. Full games — 20+ levels, juice, mobile controls, publishing — on request.</p>
    </div>
  );
}
