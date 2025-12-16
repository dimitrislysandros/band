import { Injectable } from '@angular/core';
import { Gig } from '../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  isAppleDevice(): boolean {
    return /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);
  }

  generateICS(event: Gig) {
    const start = this.toCalendarDate(event.date, event.time);
    const end = this.toCalendarDate(event.date, event.time, 120);

    const ics = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Jimmy Li – Live at ${event.venue}
DTSTART:${start}
DTEND:${end}
LOCATION:${event.venue}
DESCRIPTION:Opening band: ${event.openningBand}
END:VEVENT
END:VCALENDAR
  `.trim();

    const blob = new Blob([ics], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  }

  buildICSFilename(event: any): string {
    const city = event.city.replace(/\s+/g, '-').toLowerCase();
    const venue = event.venue.replace(/\s+/g, '-').toLowerCase();
    const date = event.date;

    return `jimmy-li-live-${city}-${venue}-${date}.ics`;
  }

  toCalendarDate(date: string, time: string, addMinutes = 0): string {
    if (!date || !time) {
      throw new Error('Invalid date or time');
    }

    let year: number;
    let month: number;
    let day: number;

    // ISO format: YYYY-MM-DD
    if (date.includes('-')) {
      const parts = date.split('-');
      if (parts.length !== 3) {
        throw new Error(`Invalid date format: ${date}`);
      }

      year = Number(parts[0]);
      month = Number(parts[1]) - 1;
      day = Number(parts[2]);
    }
    // Legacy format: DD/MM/YY
    else if (date.includes('/')) {
      const parts = date.split('/');
      if (parts.length !== 3) {
        throw new Error(`Invalid date format: ${date}`);
      }

      day = Number(parts[0]);
      month = Number(parts[1]) - 1;
      year = Number('20' + parts[2]);
    } else {
      throw new Error(`Unsupported date format: ${date}`);
    }

    const [hours, minutes] = time.split(':').map(Number);

    if ([year, month, day, hours, minutes].some(isNaN)) {
      throw new Error(`Invalid date values: ${date} ${time}`);
    }

    const d = new Date(year, month, day, hours, minutes);

    if (isNaN(d.getTime())) {
      throw new Error(`Invalid Date constructed: ${date} ${time}`);
    }

    d.setMinutes(d.getMinutes() + addMinutes);

    return d.toISOString().replace(/[-:]|\.\d{3}/g, '');
  }

  addToCalendar(event: Gig, type: 'google' | 'apple' | 'outlook') {
    const start = this.toCalendarDate(event.date, event.time);
    const end = this.toCalendarDate(event.date, event.time, 120); // +2 hours

    const title = encodeURIComponent(`Jimmy Li – Live at ${event.venue}`);
    const details = encodeURIComponent(`Opening band: ${event.openningBand}`);
    const location = encodeURIComponent(event.venue);

    if (type === 'google') {
      return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
    }

    if (type === 'outlook') {
      return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${start}&enddt=${end}&body=${details}&location=${location}`;
    }

    // Apple Calendar (.ics)
    return this.generateICS(event);
  }
}
