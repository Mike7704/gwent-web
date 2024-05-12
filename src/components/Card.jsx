"use client";
import { Faction, CardType, CardRange, CardAbility } from "@/utils/enums";
import Image from "next/image";
import sounds from "@/utils/audio/sounds";
import cardStyle from "@/styles/card.module.css";

export default function Card({ card, scale, handleClick }) {
  const width = 370 * scale;
  const height = 575 * scale;

  const drawBanner = !(
    card.faction === Faction.NEUTRAL ||
    card.type === CardType.SPECIAL ||
    card.type === CardType.LEADER
  );

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
      ? 1
      : card.quote.length > 140
      ? 1.1
      : 1.2
    : card.quote.length > 150
    ? 1.1
    : 1.2;
  const fontSizeQuote = baseFontSizeQuote * scale;

  const handleMouseEnter = () => {
    sounds.mouseHover.play();
  };

  return (
    <div
      className={cardStyle.container}
      style={{ minWidth: width, minHeight: height }}
      onMouseEnter={handleMouseEnter}
      onClick={(e) => handleClick && handleClick(e, card)}
      onContextMenu={(e) => handleClick && handleClick(e, card)}
    >
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
      {card.type === CardType.SPECIAL ? (
        <Image
          className={cardStyle.special_ability_icon}
          src={getSpecialAbilityIcon(card.ability)}
          alt={"ability icon"}
          width={103}
          height={115}
        />
      ) : (
        <Image
          className={cardStyle.strength_icon}
          src={getStrengthIcon(card.type)}
          alt={"strength icon"}
          width={152}
          height={152}
        />
      )}
      {card.range && (
        <Image
          className={cardStyle.range_icon}
          src={getRangeIcon(card.range)}
          alt={"range icon"}
          width={103}
          height={115}
        />
      )}
      {card.ability && card.type !== CardType.SPECIAL && (
        <Image
          className={cardStyle.ability_icon}
          src={getAbilityIcon(card.ability)}
          alt={"ability icon"}
          width={103}
          height={115}
        />
      )}

      {card.type !== CardType.SPECIAL && (
        <h2
          className={cardStyle.strength_container}
          style={{ fontSize: `${scale * 3.3}rem`, color: card.type === CardType.HERO ? "white" : "black" }}
        >
          {card.strength}
        </h2>
      )}

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
    return type === CardType.HERO
      ? "/images/cards/components/card_hero_description.png"
      : "/images/cards/components/card_description.png";
  }
  // Banner version
  return type === CardType.HERO
    ? "/images/cards/components/card_hero_description_banner.png"
    : "/images/cards/components/card_description_banner.png";
}

// Display banner image based on faction.
function getBanner(faction) {
  switch (faction) {
    case Faction.NORTHERN_REALMS:
      return "/images/cards/components/banner_northern_realms.png";
    case Faction.NILFGAARD:
      return "/images/cards/components/banner_nilfgaard.png";
    case Faction.SCOIATAEL:
      return "/images/cards/components/banner_scoiatael.png";
    case Faction.MONSTERS:
      return "/images/cards/components/banner_monsters.png";
    case Faction.SKELLIGE:
      return "/images/cards/components/banner_skellige.png";
    default:
      throw new Error(`Failed to draw banner for faction: ${faction}`);
  }
}

// Display border image based on faction and card type.
function getBorder(faction, type) {
  if (type === CardType.HERO) {
    return "/images/cards/components/border_hero.png";
  }

  switch (faction) {
    case Faction.NORTHERN_REALMS:
      return "/images/cards/components/border_northern_realms.png";
    case Faction.NILFGAARD:
      return "/images/cards/components/border_nilfgaard.png";
    case Faction.SCOIATAEL:
      return "/images/cards/components/border_scoiatael.png";
    case Faction.MONSTERS:
      return "/images/cards/components/border_monsters.png";
    case Faction.SKELLIGE:
      return "/images/cards/components/border_skellige.png";
    default:
      return "/images/cards/components/border_neutral.png";
  }
}

function getSpecialAbilityIcon(ability) {
  // Special cards
  switch (ability) {
    case CardAbility.CLEAR:
      return "/images/cards/components/card_ability_clear.png";
    case CardAbility.DECOY:
      return "/images/cards/components/card_ability_decoy.png";
    case CardAbility.FOG:
      return "/images/cards/components/card_ability_fog.png";
    case CardAbility.FROST:
      return "/images/cards/components/card_ability_frost.png";
    case CardAbility.HORN:
      return "/images/cards/components/card_ability_horn2.png";
    case CardAbility.MARDROEME:
      return "/images/cards/components/card_ability_mardroeme2.png";
    case CardAbility.RAIN:
      return "/images/cards/components/card_ability_rain.png";
    case CardAbility.SCORCH:
      return "/images/cards/components/card_ability_scorch.png";
    case CardAbility.SCORCH_ROW:
      return "/images/cards/components/card_ability_scorch_row2.png";
    case CardAbility.DRAW_ENEMY_DISCARD:
      return "/images/cards/components/card_ability_spy2.png";
    case (CardAbility.STORM, CardAbility.NATURE, CardAbility.WHITEFROST):
      return "/images/cards/components/card_ability_storm.png";
    default:
      throw new Error(`Failed to draw strength icon for special card ability: ${ability}`);
  }
}

function getStrengthIcon(type) {
  return type === CardType.HERO
    ? "/images/cards/components/power_hero.png"
    : "/images/cards/components/power_normal.png";
}

function getRangeIcon(range) {
  switch (range) {
    case CardRange.MELEE:
      return "/images/cards/components/card_row_close.png";
    case CardRange.AGILE:
      return "/images/cards/components/card_row_agile.png";
    case CardRange.RANGED:
      return "/images/cards/components/card_row_ranged.png";
    case CardRange.SIEGE:
      return "/images/cards/components/card_row_siege.png";
    default:
      throw new Error(`Failed to draw range icon for card type: ${type}`);
  }
}

function getAbilityIcon(ability) {
  switch (ability) {
    case CardAbility.AVENGER:
      return "/images/cards/components/card_ability_avenger.png";
    case CardAbility.MORPH:
      return "/images/cards/components/card_ability_morph.png";
    case CardAbility.BOND:
      return "/images/cards/components/card_ability_bond.png";
    case CardAbility.HORN:
      return "/images/cards/components/card_ability_horn.png";
    case CardAbility.MARDROEME:
      return "/images/cards/components/card_ability_mardroeme.png";
    case CardAbility.MEDIC:
      return "/images/cards/components/card_ability_medic.png";
    case CardAbility.MORALE:
      return "/images/cards/components/card_ability_morale.png";
    case CardAbility.MUSTER:
      return "/images/cards/components/card_ability_muster.png";
    case CardAbility.SCORCH:
      return "/images/cards/components/card_ability_scorch2.png";
    case CardAbility.SCORCH_ROW:
      return "/images/cards/components/card_ability_scorch_row.png";
    case CardAbility.SPY:
      return "/images/cards/components/card_ability_spy.png";
    default:
      throw new Error(`Failed to draw ability icon for card ability: ${ability}`);
  }
}
