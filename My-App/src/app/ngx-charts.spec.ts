import { NgxChartsModule } from 'ngx-charts.module';

/*
  This file is to import the main module. By importing it into this
  spec file, all the attached components get traversed and recognized
  in the code coverage stats.
*/

describe('ngx-charts Module', () => {

  it('should load', () => {
    expect(NgxChartsModule).toBeDefined();
  });

});
