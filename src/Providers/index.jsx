import { EventProvider } from "./event";
import { AuthenticatedProvider } from "./authenticated";

const Providers = ({ children }) => {
  return (
    <AuthenticatedProvider>
      <EventProvider>{children}</EventProvider>
    </AuthenticatedProvider>
  );
};

export default Providers;
