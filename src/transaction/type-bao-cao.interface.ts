export interface TypeBaoCaoInterface {
  name?: string;
  series?: SeriesInterface[];
}
export interface SeriesInterface {
  name?: string;
  value?: number;
}
export interface ResponseStatistics {
  datas: Array<TypeBaoCaoInterface | SeriesInterface>
}
