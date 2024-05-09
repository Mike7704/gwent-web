"use client";
import Image from "next/image";
import sounds from "@/utils/audio/sounds";
import cardStyle from "@/styles/card.module.css";

export default function Card({ card, scale }) {
  const width = 370 * scale;
  const height = 575 * scale;

  const drawBanner = !(card.faction === "neutral" || card.type === "special" || card.type === "leader");

  const baseFontSizeName = drawBanner
    ? card.name.length > 26
      ? 1.3
      : card.name.length > 22
      ? 1.4
      : 1.5
    : card.name.length > 26
    ? 1.4
    : 1.5;
  const fontSizeName = baseFontSizeName * scale;

  const baseFontSizeQuote = drawBanner
    ? card.quote.length > 150
      ? 0.95
      : card.quote.length > 140
      ? 1
      : 1.1
    : card.quote.length > 150
    ? 1.1
    : 1.2;
  const fontSizeQuote = baseFontSizeQuote * scale;

  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <div className={cardStyle.container} style={{ width, height }} onMouseEnter={handleMouseEnter}>
      {card.videoPath === "TEMP" ? (
        <video className={cardStyle.image} autoPlay loop muted playsInline>
          <source src={`/images/cards/${card.videoPath}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          className={cardStyle.image}
          src={`/images/cards/${card.imagePath}`}
          alt={card.name + "image"}
          width={370}
          height={531}
        />
      )}
      <Image
        className={cardStyle.bottom_panel}
        src={getPanel(card.type, drawBanner)}
        alt={"panel"}
        width={370}
        height={128}
      />
      {drawBanner && (
        <Image
          className={cardStyle.banner}
          src={getBanner(card.faction)}
          alt={"faction banner"}
          width={98}
          height={575}
        />
      )}
      <Image
        className={cardStyle.border}
        src={getBorder(card.faction, card.type)}
        alt={"border"}
        width={370}
        height={531}
      />
      <Image
        className={cardStyle.strength_icon}
        src={getStrengthIcon(card.type)}
        alt={"strength icon"}
        width={152}
        height={152}
      />
      <Image
        className={cardStyle.range_icon}
        src={getRangeIcon(card.range)}
        alt={"range icon"}
        width={103}
        height={115}
      />
      {card.ability && (
        <Image
          className={cardStyle.ability_icon}
          src={getAbilityIcon(card.ability)}
          alt={"ability icon"}
          width={103}
          height={115}
        />
      )}

      <h2
        className={cardStyle.strength_container}
        style={{ fontSize: `${scale * 3.3}rem`, color: card.type === "hero" ? "white" : "black" }}
      >
        {card.strength}
      </h2>
      <h2
        className={drawBanner ? cardStyle.name_container_banner : cardStyle.name_container}
        style={{ fontSize: `${fontSizeName}rem` }}
      >
        {card.name}
      </h2>
      <p
        className={drawBanner ? cardStyle.quote_container_banner : cardStyle.quote_container}
        style={{ fontSize: `${fontSizeQuote}rem` }}
      >
        {card.quote}
      </p>
    </div>
  );
}

// Display panel image based on card type.
function getPanel(type, drawBanner) {
  // No banner version
  if (!drawBanner) {
    return type === "hero"
      ? "/images/cards/components/card_hero_description.png"
      : "/images/cards/components/card_description.png";
  }
  // Banner version
  return type === "hero"
    ? "/images/cards/components/card_hero_description_banner.png"
    : "/images/cards/components/card_description_banner.png";
}

// Display banner image based on faction.
function getBanner(faction) {
  switch (faction) {
    case "northernRealms":
      return "/images/cards/components/banner_northern_realms.png";
    case "nilfgaard":
      return "/images/cards/components/banner_nilfgaard.png";
    case "scoiatael":
      return "/images/cards/components/banner_scoiatael.png";
    case "monsters":
      return "/images/cards/components/banner_monsters.png";
    case "skellige":
      return "/images/cards/components/banner_skellige.png";
    default:
      throw new Error(`Failed to draw banner for faction: ${faction}`);
  }
}

// Display border image based on faction and card type.
function getBorder(faction, type) {
  if (type === "hero") {
    return "/images/cards/components/border_hero.png";
  }

  switch (faction) {
    case "northernRealms":
      return "/images/cards/components/border_northern_realms.png";
    case "nilfgaard":
      return "/images/cards/components/border_nilfgaard.png";
    case "scoiatael":
      return "/images/cards/components/border_scoiatael.png";
    case "monsters":
      return "/images/cards/components/border_monsters.png";
    case "skellige":
      return "/images/cards/components/border_skellige.png";
    default:
      return "/images/cards/components/border_neutral.png";
  }
}

function getStrengthIcon(type) {
  return type === "hero" ? "/images/cards/components/power_hero.png" : "/images/cards/components/power_normal.png";
}

function getRangeIcon(range) {
  switch (range) {
    case "melee":
      return "/images/cards/components/card_row_close.png";
    case "agile":
      return "/images/cards/components/card_row_agile.png";
    case "ranged":
      return "/images/cards/components/card_row_ranged.png";
    case "siege":
      return "/images/cards/components/card_row_siege.png";
    default:
      throw new Error(`Failed to draw range icon for card type: ${type}`);
  }
}

function getAbilityIcon(ability) {
  switch (ability) {
    case "avenger":
      return "/images/cards/components/card_ability_avenger.png";
    case "morph":
      return "/images/cards/components/card_ability_morph.png";
    case "bond":
      return "/images/cards/components/card_ability_bond.png";
    case "horn":
      return "/images/cards/components/card_ability_horn.png";
    case "mardroeme":
      return "/images/cards/components/card_ability_mardroeme.png";
    case "medic":
      return "/images/cards/components/card_ability_medic.png";
    case "morale":
      return "/images/cards/components/card_ability_morale.png";
    case "muster":
      return "/images/cards/components/card_ability_muster.png";
    case "scorch":
      return "/images/cards/components/card_ability_scorch2.png";
    case "scorchrow":
      return "/images/cards/components/card_ability_scorch_row.png";
    case "spy":
      return "/images/cards/components/card_ability_spy.png";
    default:
      throw new Error(`Failed to draw ability icon for card ability: ${ability}`);
  }
}
