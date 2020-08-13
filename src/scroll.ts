///<reference path="page.ts"/>
namespace DSS {
    export type ProgressHendler = (progress: IProgress) => void;
    export class ScrollInit {
        constructor(
            offsetY: number,
            cursorId: string,
            menuId: string,
            isDebug?: boolean,
            callBack?: ProgressHendler
        ) {
            let height = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );

            let cursor = this.GetElementOrThrowError(cursorId) as HTMLDivElement;
            let menu = this.GetElementOrThrowError(menuId) as HTMLUListElement;

            new Page(
                height,
                offsetY,
                cursor,
                menu,
                isDebug,
                callBack,
            );
        }

        private GetElementOrThrowError(id: string): Element {
            let element = document.querySelector(id);

            if (!element) throw new Error(`Element with id '${id}' not found!`);

            return element;
        }
    }
}