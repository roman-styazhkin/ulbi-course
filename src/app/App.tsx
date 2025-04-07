import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';
import { Suspense } from 'react';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-inner">
        <Sidebar />
        <Suspense fallback={<div>Loding...</div>}>
          <AppRouter />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
