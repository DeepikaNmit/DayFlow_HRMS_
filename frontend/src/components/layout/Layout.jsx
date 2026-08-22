import Sidebar from './Sidebar';import Header from './Header';export default function Layout({children}){return <div className="app"><Sidebar/><main><Header/>{children}</main></div>}
