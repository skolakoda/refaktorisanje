  validateStartEndDate(): boolean {
    if (this.experience.endDate || this.presentChecked) {
      if (!this.experience.startDate) {
        return true;
      } else {
        if (this.presentChecked) {
          return !this.dateFormattingService.dateInPastLocale(this.experience.startDate);
        } else {
          return !this.dateFormattingService.isBefore(this.experience.startDate, this.experience.endDate);
        }
      }
    }
    return false;
  }
