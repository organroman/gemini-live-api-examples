export default function Waveform({ active }: { active: boolean }) {
  return (
    <div className={`waveform ${active ? "active" : "idle"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="waveform-bar" />
      ))}
    </div>
  );
}
