import { Pipe, PipeTransform } from "@angular/core";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/fr";
dayjs.locale("fr");
dayjs.extend(relativeTime);

@Pipe({
  name: "dateFromNowFormatter",
})
export class DateFromNowFormatterPipe implements PipeTransform {
  transform(date: Date): string {
    const formattedDate = dayjs(date).fromNow();
    return formattedDate;
  }
}
