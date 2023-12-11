import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCrown} />
          <span className="ml-2">Praise</span>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
