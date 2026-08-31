interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  dividerColor?: 'gold' | 'green';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  dividerColor = 'gold',
}: SectionHeadingProps) {
  return (
    <div className={`mb-6 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`font-body text-xs tracking-[0.2em] uppercase font-semibold mb-3 ${light ? 'text-gold-300' : 'text-forest-700'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`section-heading leading-tight mb-4 ${light ? 'text-white' : 'text-forest-900'}`}>
        {title}
      </h2>
      <div className={`${centered ? 'mx-auto' : ''} ${dividerColor === 'gold' ? 'divider-gold' : 'divider-green'}`} />
      {subtitle && (
        <p className={`section-subheading max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
