import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="absolute bottom-1 left-0">
      <div className="grid gap-3 grid-flow-col">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/c/Climbby"
          className="hover:translate-y-[2px] inline-block transition-transform text-[#FF0000]"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dsc.gg/cooldog"
          className="hover:translate-y-[2px] inline-block transition-transform text-[#5865F2]"
        >
          <FontAwesomeIcon icon={faDiscord} size="2x"/>
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Climbby"
          className="hover:translate-y-[2px] inline-block transition-transform text-[#1d9bf0]"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </div>
  );
};
