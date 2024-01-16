import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/medical-bag'
import SearchBox from './SearchBox'

const Header = ({ville , chooseZone }) => {
    return (
        <header id="head" className="header">
            <h1 id='titleapp'><Icon icon={locationIcon} /> Pharmacy Locator build 0.0</h1>
            <SearchBox ville={ville} chooseZone={chooseZone} />
        </header>
    )
}

export default Header