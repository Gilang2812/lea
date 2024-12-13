import { Aside } from "./component/Aside";

export default function layout({children}) {
    return <main>
         <Aside />
         <Header>
         {children}

         </Header>
    </main>
}