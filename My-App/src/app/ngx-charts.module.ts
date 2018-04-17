import './polyfills';
// './area-chart/area-chart.module';
import { NgModule } from '@angular/core';
import { ChartCommonModule } from './common';
import { AreaChartModule } from './app/area-chart';
import { BarChartModule } from './bar-chart';
import { BubbleChartModule } from './bubble-chart';
import { ForceDirectedGraphModule } from './force-directed-graph';
import { HeatMapModule } from './heat-map';
import { LineChartModule } from './line-chart';
import { PolarChartModule } from './polar-chart';
import { NumberCardModule } from './number-card';
import { PieChartModule } from './pie-chart';
import { TreeMapModule } from './tree-map';
import { GaugeModule } from './gauge';

@NgModule({
  exports: [
    ChartCommonModule,
    AreaChartModule,
    BarChartModule,
    BubbleChartModule,
    ForceDirectedGraphModule,
    HeatMapModule,
    LineChartModule,
    PolarChartModule,
    NumberCardModule,
    PieChartModule,
    TreeMapModule,
    GaugeModule
  ]
})
export class NgxChartsModule {}
