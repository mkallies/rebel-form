import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Add other globals for easier testing

global.shallow = shallow
global.mount = mount

configure({ adapter: new Adapter() })
