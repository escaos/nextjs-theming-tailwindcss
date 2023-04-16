import { SwitchTheme } from '@/containers/SwitchTheme';
import { useThemeContext } from '@/contexts/ThemeContext';
import { clsx } from 'clsx';

const Home = () => {
  const { palette } = useThemeContext();
  const mainClass = clsx(
    'flex min-h-screen flex-col items-center justify-between p-24',
    `bg-[${palette.main.background}] !important`
  );

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-24"
      style={{ backgroundColor: palette.main.background }} // Set the background color using inline styles
    >
      <div className={mainClass}>
        <SwitchTheme />
        <h1 className="text-6xl font-bold">Next.js + Tailwind CSS</h1>
      </div>
    </main>
  );
};

export default Home;
