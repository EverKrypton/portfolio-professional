'use client';
import { useEffect, useRef } from 'react';

// Lightweight interactive Phaser 4 hero — lazy loaded, no SEO impact
export default function PhaserHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let game: any;
    (async () => {
      const Phaser = await import('phaser');

      class HeroScene extends Phaser.Scene {
        private stars!: any;
        private score = 0;
        private scoreText!: any;
        constructor() { super('hero'); }
        create() {
          const w = this.scale.width, h = this.scale.height;
          this.cameras.main.setBackgroundColor('#0a0f1e');
          // ground
          const g = this.add.graphics();
          g.fillStyle(0x16213a, 1).fillRect(0, h - 36, w, 36);
          g.fillStyle(0x22d3ee, 0.9).fillRect(0, h - 36, w, 3);
          // player
          const p = this.add.rectangle(60, h - 70, 30, 30, 0x22d3ee);
          this.physics.add.existing(p);
          const body = (p as any).body as Phaser.Physics.Arcade.Body;
          body.setCollideWorldBounds(true);
          // stars
          this.stars = this.physics.add.group();
          const spawn = () => {
            const x = Phaser.Math.Between(w - 120, w - 20);
            const y = Phaser.Math.Between(30, h - 90);
            const s = this.add.circle(x, y, 9, 0xa78bfa);
            this.stars.add(s);
            (s as any).body.setCircle(9);
            this.tweens.add({ targets: s, y: y + 10, duration: 900, yoyo: true, repeat: -1, ease: 'sine.inout' });
          };
          for (let i = 0; i < 5; i++) spawn();
          this.scoreText = this.add.text(12, 10, 'SCORE 0 — TAP TO JUMP', { fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace' });
          this.physics.add.overlap(p, this.stars, (_p: any, s: any) => {
            s.destroy();
            this.score += 10;
            this.scoreText.setText(`SCORE ${this.score} — TAP TO JUMP`);
            spawn();
          });
          const jump = () => { if (body.blocked.down || body.touching.down) body.setVelocityY(-380); };
          this.input.on('pointerdown', jump);
          // idle bounce + auto runner feel
          this.tweens.add({ targets: p, scaleX: 1.12, scaleY: 0.88, duration: 500, yoyo: true, repeat: -1 });
        }
        update() {
          // scroll stars left for motion
          this.stars.getChildren().forEach((s: any) => {
            s.x -= 1.2;
            if (s.x < -20) { s.x = this.scale.width - 10; s.y = Phaser.Math.Between(30, this.scale.height - 90); }
          });
        }
      }

      const config: any = {
        type: Phaser.AUTO,
        parent: ref.current,
        width: 560,
        height: 350,
        backgroundColor: '#0a0f1e',
        physics: { default: 'arcade', arcade: { gravity: { y: 900 }, debug: false } },
        scene: [HeroScene],
      };
      game = new Phaser.Game(config);
    })();
    return () => { try { game?.destroy(true); } catch {} };
  }, []);

  return <div id="phaser-hero" ref={ref} role="img" aria-label="Playable mini game demo built with Phaser" />;
}
