export default function Footer() {
  return (
    <section className="mx-auto column m-auto text-center md:justify-between p-16 md:flex bg-black">
      <div className="text-white">
        <div className="flex text-start justify-center space-x-4 sm:space-x-10">
          <ul className="space-y-6">
            <li className="text-secondary">Upcoming events</li>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
          <ul className="space-y-6">
            <li className="text-secondary">Upcoming events</li>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
          <ul className="space-y-6">
            <li className="text-secondary">Upcoming events</li>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
        </div>
      </div>
      <div className="text-white flex flex-col ">
        <ul className="space-y-4  md:space-y-8">
          <li className="font-fontJakarta mt-8 md:mt-0  font-normal text-2xl md:text-4xl">
            <h3>Lets Collaborate</h3>
          </li>
          <li className="text-secondary">
            <p>Together, we can achieve your savings goals.</p>
          </li>
        </ul>
        <div className="space-x-8  sm:space-x-16  md:space-x-8 justify-center flex text-secondary text-3xl mt-10">
          <a
            className="hover:text-neutral"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            className="hover:text-neutral"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            className="hover:text-neutral"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a
            className="hover:text-neutral"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            className="hover:text-neutral"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
