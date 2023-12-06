import Image from "next/image";

function Footer() {
  return (
    <footer className="mb-1 text-body-text">
      <ul className="flex flex-row pl-1 pr-2">
        <li className="mr-3">
          <a>
            <Image
              src="/github-mark.svg"
              width={27}
              height={27}
              alt="Github Logo with link taking you to Lucas Furlong's Github account"
            />
          </a>
        </li>
        <li className="mr-3">
          <a>
            <Image
              src="/linkedin.svg"
              width={27}
              height={27}
              alt="LinkedIn Logo with link taking you to Lucas Furlong's LinkedIn account"
            />
          </a>
        </li>
        <li className="mr-3">
          <a href="https://dribbble.com/LucasF67">
            <Image
              src="/dribbble.svg"
              width={27}
              height={27}
              alt="LinkedIn Logo with link taking you to Lucas Furlong's LinkedIn account"
            />
          </a>
        </li>
        <li>
          <a>
            <Image
              src="/email.png"
              width={27}
              height={27}
              alt="Contact form button"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
