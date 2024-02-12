export default function layout({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <section className="">

            {children}

        </section>
    );
}
