export class Paginated {
    public _page: number = 0;
    public _pagesCount: number = 0;
    public _totalCount: number = 0;

    constructor(page: number, pagesCount: number, totalCount: number) {
        this._page = page;
        this._pagesCount = pagesCount;
        this._totalCount = totalCount;
    }

    range(): number[] {
        if (!this._pagesCount) { return []; }
        let step = 2;
        let doubleStep = step * 2;
        let start = Math.max(0, this._page - step);
        let end = start + 1 + doubleStep;
        if (end > this._pagesCount) {
            end = this._pagesCount;
        }
        let ret: number[] = [];

        for (let i = start; i !== end; ++i) {
            ret.push(i);
        }

        return ret;
    }

    pagePlus(count: number): number {
        return + this._page + count;
    }

    search(i: number): void {
        this._page = i;
    }
}
