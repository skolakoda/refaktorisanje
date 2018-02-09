# Moć apstrakcije

Ova budževina:

```ts
onItemSelect(searchFilterItem: SearchFilterControl<any>, item: ListItem<any>) {
    if (searchFilterItem.formControlName === 'jobTypes') {
      this.job.jobType = item.itemObject;
    }
    if (searchFilterItem.formControlName === 'specializations') {
      this.job.nSpecialization = item.itemObject;
    }
    if (searchFilterItem.formControlName === 'countries') {
      this.job.country = item.itemObject;
    }
    if (searchFilterItem.formControlName === 'clubs') {
      this.job.userPage = item.itemObject;
    }
  }

  onItemDeSelect(searchFilterItem: SearchFilterControl<any>, item: ListItem<any>) {
    if (searchFilterItem.formControlName === 'jobTypes') {
      this.job.jobType = null;
    }
    if (searchFilterItem.formControlName === 'specializations') {
      this.job.nSpecialization = null;
    }
    if (searchFilterItem.formControlName === 'countries') {
      this.job.country = null;
    }
    if (searchFilterItem.formControlName === 'club') {
      this.job.userPage = null;
    }
  }
```

Postaje:

```ts
  handleSelect(property: string, item: ListItem<any>, select: boolean = true) {
    this.job[property] = select ? item.itemObject : null;
  }
```
