export interface ISearchResultItem {
  description: string
  displaySymbol: string
  symbol: string
  type: string
}

export interface ISearchResult {
  count: number
  result: ISearchResultItem[]
}
