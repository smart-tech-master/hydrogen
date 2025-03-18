import {Aside} from '~/components/Aside';

export function PageLayout({
  children = null,
}) {
  return (
    <Aside.Provider>
      <main>{children}</main>
    </Aside.Provider>
  );
}
