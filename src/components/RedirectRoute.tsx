import { ComponentType, FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RedirectRouteProps {
  component: ComponentType;
}

const RedirectRoute: FC<RedirectRouteProps> = ({ component: Component }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (currentUser) {
    return <Navigate to='/' state={{ from: location }} />;
  } else {
    return <Component />;
  }
};

export default RedirectRoute;
