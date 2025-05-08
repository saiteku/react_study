/**
 * 元々はcontextComponent.tsxにまとめて記述していたが、以下のような警告が表示された。
 * Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components.
 * 高速リフレッシュは、ファイルがコンポーネントのみをエクスポートする場合にのみ機能します。コンポーネント間で定数や関数を共有するには、新しいファイルを使用してください。
 * 
 * 上記のように、コンポーネント以外をexportするとreactの性能が落ちるとの警告があったため、ファイルを分けて、contextを管理するようにした。
 */

import {createContext} from "react";

interface ContextAType {
    user: {name: string, age: number},
    setUser: React.Dispatch<React.SetStateAction<{name: string, age: number}>>
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const contextA = createContext<ContextAType | undefined>(undefined);

export default contextA;