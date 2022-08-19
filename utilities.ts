/**
 * Deno Utilities Monorepo
 * Multiple Useful utility tools for Deno Projects
 *
 * Slugify a string
 * Kilometer Conversion - From Meter to Kilometer
 * Convert Speed from Meter Per Seconds to Kilometer Per Hour
 * Convert Bike or Cycle Moving time to Human Readable format
 * Convert date to Human Readable format
 */

export class utilitytools {
  public static HashTag(GetHashtag: string) {
    const cleanTags = GetHashtag.replace(/[^\w ]/g, "");
    const tagged = cleanTags.replace(/(\w+)/gi, "#" + "$1");
    return tagged;
  }

  public static slugify(GetText: string) {
    return GetText
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "")
      .replace(/-+@/, "")
      .replace("<script>", "script")
      .replace("(", "")
      .replace(")", "")
      .replaceAll(".", "-");
  }

  public static kmConversion(user_km: number) {
    const total_km = user_km / 1000;
    const final_km = parseFloat(total_km).toFixed(2) + " km";
    return final_km;
  }

  public static speedConversion(user_speed: number) {
    const meter_per_seconds = user_speed;
    const speed_value = 3.6;
    const total_speed = meter_per_seconds * speed_value;
    const final_speed = total_speed.toFixed(1) + " Km/h";
    return final_speed;
  }

  public static movingTime(getFulltime: number) {
    const sec = parseInt(getFulltime, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10) {
      // deno-lint-ignore no-self-assign
      hours = hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  public static humanDate(user_date: string) {
    const datetime = new Date(user_date);
    const now = datetime.toISOString().slice(0, 10);
    return now;
  }
}
