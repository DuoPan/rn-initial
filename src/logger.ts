import getProfile from '@profile';
import { formatIOSDate } from 'Utils/formatDate';

function createColorPrinter(bgColor = '#FFFFFF', color = '#000000') {
  function print(msg) {
    console.log(`%c ${msg}`, `background: ${bgColor}; color: ${color}`);
  }
  return {
    print,
  };
}

function createPrinter() {
  function print(msg: any) {
    console.log(msg);
  }
  return {
    print,
  };
}

export function createLogger({
  isEnabled = false,
  name = '_ANONYMOUSE_LOGGER_',
  index = 0,
  color = false,
}) {
  // Plain print
  const _print = createPrinter().print;
  // Plain text colorful print
  const _printCE = createColorPrinter('#F5F5F5', '#6A1B9A').print;
  const _printCO = createColorPrinter('#F5F5F5', '#2E7D32').print;
  // Number of the message.
  let _n = 0;

  if (isEnabled) {
    _print(``);
    _print(`---> logger ${name}-${index}`);
  }

  function _printC(n: number) {
    if (n % 2) {
      return _printCO;
    } else {
      return _printCE;
    }
  }

  function _print_({ number, tags, date, target }) {
    if (isEnabled && target.length > 0) {
      // Show the current logger name, its index, IOS time, message number, and message tags.
      const _prefix = `[${name}-${index}]>[${formatIOSDate(
        date,
      )}-${number}-(${tags.join(',')})]`;
      target.forEach(t => {
        const _type = typeof t;
        if (_type === 'object' || _type === 'function') {
          _print(t);
        } else if (color) {
          _printC(number)(`${_prefix} ${t}`);
        } else {
          _print(`${_prefix} ${t}`);
        }
      });
    }
  }

  function _log_(...tags) {
    if (isEnabled) {
      _n++;
      return function(...msg) {
        _print_({
          number: _n,
          tags,
          date: new Date(),
          target: msg,
        });
      };
    } else {
      return () => {};
    }
  }

  function _reset_() {
    if (isEnabled) {
      _print(`[log reset]`);
      _n = 0;
    }
  }

  return {
    _log_,
    _print_,
    _reset_,
  };
}

// The logger factory.
export function _logging_(name = '_ANONYMOUSE_LOGGER_', startIndex = 0) {
  let _index = startIndex;
  function _logger_() {
    _index++;
    return createLogger({ isEnabled: getProfile().debug, name, index: _index });
  }
  return {
    _logger_,
  };
}

// The logger factory for components.
export function _componentLogging_(Component, startIndex = 0) {
  return _logging_(Component.name, startIndex);
}
