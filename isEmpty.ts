  isEmpty() {
    return (
      this.profile.headline ||
      (this.profile.basicInfo ? (
        this.profile.basicInfo.gender ||
        this.profile.basicInfo.yearOfBirth ||
        this.profile.basicInfo.country ||
        this.profile.basicInfo.city
      ) : false) ||
      this.languages ||
      (this.playerInfo ? (
        this.playerInfo.preferredFoot ||
        this.playerInfo.sport ||
        this.playerInfo.role ||
        this.playerInfo.specialization ||
        this.playerInfo.height ||
        this.playerInfo.weight ||
        this.playerInfo.shirtNumber
      ) : false)
    ) ? false : true;
  }
