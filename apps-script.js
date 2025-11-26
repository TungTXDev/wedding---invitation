/**
 * Google Apps Script - Amaris Contact Form Handler
 *
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Tạo một Google Sheet mới (hoặc dùng sheet có sẵn)
 * 2. Vào Tools > Script Editor trong Google Sheets
 * 3. Xóa code mặc định và paste toàn bộ code này vào
 * 4. Thay thế 'YOUR_SHEET_ID' bằng Sheet ID của bạn (lấy từ URL: .../d/SHEET_ID/edit)
 * 5. Đặt tên cho sheet tab chứa dữ liệu là "Contact Form" (hoặc thay đổi trong code)
 * 6. Lưu project (Ctrl+S hoặc Cmd+S)
 * 7. Deploy > New deployment > Chọn "Web app"
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 8. Copy URL Web App và paste vào file .env của project React với key VITE_APPS_SCRIPT_URL
 *
 * CẤU TRÚC GOOGLE SHEET:
 * - Dòng 1 (Header): Timestamp | Name | Email | Phone | Message
 * - Dòng 2 trở đi: Dữ liệu từ form sẽ được thêm vào đây
 */

// THAY ĐỔI SHEET_ID CỦA BẠN TẠI ĐÂY
// THAY ĐỔI SHEET_ID CỦA BẠN TẠI ĐÂY
const SHEET_ID = import.meta.env.VITE_APPS_SCRIPT_SHEETID; // Lấy từ URL Google Sheet

/**
 * Xử lý OPTIONS request (CORS preflight)
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type")
    .setHeader("Access-Control-Max-Age", "86400");
}

/**
 * Xử lý POST request từ React
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (!data.side || !data.guestName || !data.attendees) {
      throw new Error("Missing required fields");
    }

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);

    // Chọn tab dựa theo side
    let sheetName = "";
    if (data.side === "Groom") sheetName = "Nhà trai";
    else if (data.side === "Bride") sheetName = "Nhà gái";
    else throw new Error("Invalid side value");

    let sheet = spreadsheet.getSheetByName(sheetName);

    // Nếu sheet chưa tồn tại, tạo mới
    if (!sheet) {
      sheet = spreadsheet.insertSheet(sheetName);
      sheet
        .getRange(1, 1, 1, 3)
        .setValues([["Guest Name", "Attendees", "Timestamp"]]);
      const headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange
        .setFontWeight("bold")
        .setBackground("#f4b400")
        .setFontColor("#ffffff");
      sheet.autoResizeColumns(1, 3);
    }

    const timestamp = new Date();
    sheet.appendRow([data.guestName, data.attendees, timestamp]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "RSVP submitted" })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message })
    )
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

/**
 * GET để test kết nối
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "success", message: "RSVP API running" })
  )
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
