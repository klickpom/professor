type Props = {
  className?: string;
};

export function TrowelNotch({ className = "" }: Props) {
  return (
    <svg
      className={`text-line ${className}`}
      viewBox="0 0 200 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 6 H200" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
