'use client';
import styles from './style.module.css';

export default function PlanningPokerPage() {
  return (
    <div className={styles.planningContainer}>
      <h1 className={styles.planningTitle}>Planning Poker</h1>
      <p className={styles.planningDescription}>
        This page is for the Planning Poker feature of Pointly. Use this tool to estimate tasks collaboratively and effectively during your development sprints.
      </p>
    </div>
  );
}
