  handleFacebookAuthResponse(redirect, authResponse) {
    const fbResponse = JSON.parse(JSON.stringify(authResponse));
    return this.userSocialDataService
      .getFacebookData(fbResponse.access_token)
      .subscribe(
        userSocialData => {
          this.getFbPictureLarge(userSocialData.externalId)
            .subscribe(
              largePicture => {
                userSocialData.profilePictureUrl = largePicture;
                this.phSocialAuthenticate(userSocialData, fbResponse.access_token, 'Facebook')
                  .subscribe(() => {
                    if (redirect) {
                      this.router.navigate(['/auth/init']);
                    }
                  });
              },
              err => console.error('handleFacebookAuthResponse - getFbPictureLarge', err)
          );
        },
        err => console.error('handleFacebookAuthResponse - getFacebookData', err)
      );
  }
