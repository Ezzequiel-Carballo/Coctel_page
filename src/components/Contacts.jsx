import gsap from "gsap";
import { SplitText } from "gsap/all";
import { openingHours, socials } from "../../constants";
import { useGSAP } from "@gsap/react";

const Contacts = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#contact h2", {
      type: "word",
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: "-50",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          y: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Buenos Aires, BA 8156</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(011) 1156-5460</p>
          <p>zekcode@codemax.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((hours) => (
            <p key={hours.day}>
              {hours.day} : {hours.time}
            </p>
          ))}
        </div>
        <div className="flex-center gap-5">
          {socials.map((redes) => (
            <a
              key={redes.name}
              href={redes.url}
              target="_black"
              rel="noopener noreferrer"
              aria-label={redes.name}
            >
              <img src={redes.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contacts;
