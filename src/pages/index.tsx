import { SwitchTheme } from '@/containers/SwitchTheme';
import { useThemeContext } from '@/contexts/ThemeContext';

const Home = () => {
  const { palette, theme } = useThemeContext();
  console.log('🚀 ~ file: index.tsx:7 ~ Home ~ theme:', theme);
  console.log('🚀 ~ file: index.tsx:15 ~ Home ~ palette.main.background:', palette.main.background);

  return (
    <main
      className={`
        flex min-h-screen flex-col items-center justify-between p-24 bg-[${palette.main.background}]`}
    >
      <div>
        <SwitchTheme />
        <h1 className="text-6xl font-bold">Next.js + Tailwind CSS</h1>
      </div>
    </main>
  );
};

export default Home;
