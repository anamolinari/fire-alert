import { ReportPage } from "./StylesPages/ReportPage";
import FileIcon from "../assets/icon-file.svg";

export function Report() {
  return (
    <ReportPage>
      <div>
        <h1>Actions report</h1>
        <img src={FileIcon} alt="Attach your file" />
      </div>
      <label htmlFor="actionsReport">
        Write here your action report for this incident...
      </label>
      <textarea
        id="actionsReport"
        name="actionsReport"
        placeholder="Write here your action report for this incident..."
        aria-label="Actions report for incident"
        aria-describedby="actionReportDescription"
      />
    </ReportPage>
  );
}
