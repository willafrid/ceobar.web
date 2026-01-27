type SectionHeaderProps = {
  title: string;
  className?: string;
};

export default function SectionHeader({ title, className = '' }: SectionHeaderProps) {
  return (
    <div className={`bg-[#2e2c2f] rounded-xl p-4 mb-4 ${className}`.trim()}>
      <h2 className="text-[#e3deda] text-center font-semibold">{title}</h2>
    </div>
  );
}
