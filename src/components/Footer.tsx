export default function Footer() {
  return (
    <section className="justify-between p-16 flex bg-black">
      <div className="text-white">
        <ul className="space-y-10 ">
          <li className="font-fontJakarta font-normal text-4xl">
            <h3>Lets Collaborate</h3>
          </li>
          <li className="text-secondary">
            <p>Together, we can achieve your savings goals.</p>
          </li>
          <li>
            <div className="space-x-8 flex text-secondary text-3xl ">
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
          </li>
        </ul>
      </div>
      <div className="text-white">
        <div className="flex space-x-10">
          <ul className="space-y-6">
            <li className="text-secondary">Upcoming events</li>
            <li>Event 1</li>
            <li>Event 2</li>
            <li>Event 3</li>
          </ul>
          <ul className="space-y-6 text-neutral">
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
    </section>
  );
}
