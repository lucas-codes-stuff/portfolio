import Image from "next/image";

export default function About() {
  return (
    <main className="flex h-screen w-screen bg-base">
      <div className="flex h-screen w-screen flex-row bg-main-texture">
        <div className="absolute flex h-screen w-[50%] flex-col items-center justify-center text-highlight">
          <div className="mb-2">
            <Image
              alt="Image of Lucas Furlong"
              src="/about-1.jpeg"
              width={200}
              height={200}
              className="h-[200px] w-[200px] rounded-[50%] border-[8px] border-[#FF6F3D] object-cover"
            ></Image>
          </div>
          <h2 className="text-2xl font-semibold">Jr. Software Engineer</h2>
          <h2 className="mb-3 text-2xl font-semibold">
            OWL Computing Development
          </h2>
          <div className="mb-3 w-[85%] text-center italic">
            I&apos;m a Full-Stack Developer creating custom software solutions,
            from websites to complex hardware integrations. My work spans design
            to deployment, focusing on innovative, client-centered development.
          </div>
          <div className="mb-5 flex flex-col items-center">
            <h1 className="mb-5 text-center text-2xl font-semibold">
              Technologies
            </h1>
            <div className="flex w-[55%] flex-grow-0 flex-wrap items-center justify-around gap-3">
              <Image
                src="/typescript.svg"
                width={80}
                height={80}
                alt="TypeScript Logo"
              ></Image>
              <Image
                src="/react.svg"
                width={80}
                height={80}
                alt="React Logo"
              ></Image>
              <Image
                src="/angular.svg"
                width={80}
                height={80}
                alt="Angular Logo"
              ></Image>
              <Image
                src="/nodejs.svg"
                width={80}
                height={80}
                alt="Node Logo"
              ></Image>
              <Image
                src="/csharp.svg"
                width={80}
                height={80}
                alt="C Sharp Logo"
              ></Image>
              <Image
                src="/c++.svg"
                width={80}
                height={80}
                alt="C Plus Plus Logo"
              ></Image>
              <Image
                src="/firebase.svg"
                width={80}
                height={80}
                alt="Firebase Logo"
              ></Image>
              <Image
                src="/python.svg"
                width={80}
                height={80}
                alt="Python Logo"
              ></Image>
            </div>
          </div>
          <div className="mb-5">
            <h1 className="text-center text-2xl font-semibold">About Me</h1>
          </div>
        </div>
        <div className="ml-auto flex h-screen w-[50%] bg-orange-700"></div>
      </div>
    </main>
  );
}
