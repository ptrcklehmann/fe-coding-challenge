import styles from "./tooltip.module.css";
type TooltipProps = {
  tooltipText: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
};

export const Tooltip = ({ tooltipText, children, position = 'top' }: TooltipProps) => {
  return (
    <div
      className={styles.tooltip}
      data-position={position}
    >
      <div
        className={styles.tooltip_trigger}
        aria-describedby="tooltip"
      >
        {children}
      </div>
      <div
        id="tooltip"
        role="tooltip"
        className={styles.tooltip_content}
      >
        {tooltipText}
      </div>
    </div>
  );
};
