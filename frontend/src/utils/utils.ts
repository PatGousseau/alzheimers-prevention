export const getColour = (value:number) => {
    return value > 90
      ? "#B7394F"
      : value > 71 && value <= 90
      ? "#FF7272"
      : value > 51 && value <= 70
      ? "#EBB502"
      : value > 26 && value <= 50
      ? "#7FB29F"
      : "#4F7F72";
  }

  export const getApoeStyles = (apoeStatus:string): { colour: string; value: number } => {
    let colour = '';
    let value = 0;
    switch (apoeStatus) {
      case "E4/E4":
        colour = "#B7394F";
        value = 90;
        break;
      case "E3/E4":
        colour = "#FF7272";
        value = 75;
        break;
      case "E2/E4":
        colour = "#EBB502";
        value = 60;
        break;
      case "E3/E3":
        colour = "#7FB29F";
        value = 45;
        break;
      case "E2/E3":
        colour = "#4F7F72";
        value = 30;
        break;
      case "E2/E2":
        colour = "#4F7F72";
        value = 15;
        break;
    }
    return { colour, value };
  }

  export const getHeaderAndText = (value: number): { header: string; text: string } => {
    let header: string;
    let text: string;
  
    if (value > 90) {
      header = "Much Greater Than Typical Risk:";
      text =
        "Your genetic analysis indicates that your risk for developing dementia is much greater than typical. However, it's vital to remember that your genes don't definitively predict your health outcomes. Many lifestyle and environmental factors can help manage this risk. Adopting a healthy lifestyle, and making choices specifically aimed at your genetic susceptibilities, can make a significant difference in mitigating this risk.";
    } else if (value > 71 && value <= 90) {
      header = "Greater Than Typical Risk:";
      text =
        "Your genetic analysis reveals a greater than typical risk for developing dementia. However, it's important to remember that your genes are not your destiny. Numerous lifestyle factors can significantly affect your risk. Adopting a healthy lifestyle and taking proactive steps that counter your genetic predispositions can help manage this increased risk.";
    } else if (value > 51 && value <= 70) {
      header = "Somewhat Greater Than Typical Risk:";
      text =
        "Your genetic analysis indicates a somewhat greater than typical risk for developing dementia. However, it's important to remember that genes are not the sole determinant of your health. Environmental and lifestyle factors can play a substantial role. By making healthy choices, especially those targeting your genetic predispositions, you can significantly influence your risk profile.";
    } else if (value > 26 && value <= 45) {
      header = "Somewhat Lower Than Typical Risk:";
      text =
        "Your genetic analysis shows a somewhat lower than typical risk for developing dementia. Although this is reassuring, remember that your genetic makeup is just one factor in your overall health. Lifestyle decisions and environmental factors can significantly influence your risk. Emphasizing healthy habits will aid in maintaining your lower risk and contribute to your general well-being.";
    } else {
      header = "Below Typical Risk:";
      text =
        "Your genetic analysis suggests that your risk for developing dementia is below typical. Nonetheless, it's crucial to remember that while genes contribute to your overall health picture, they are not the complete story. Your lifestyle and environment also have a role. Continuing to make healthy choices will maintain your low risk and positively impact your overall health.";
    }
  
    return { header, text };
  }
  
  