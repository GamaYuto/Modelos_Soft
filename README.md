# Modelos_Soft
```
Modelos_Soft
├─ README.md
└─ lp_solver
   ├─ README.md
   ├─ REPORTE.md
   ├─ SUSTENTACION.md
   ├─ backend
   │  ├─ __pycache__
   │  │  ├─ api.cpython-312.pyc
   │  │  ├─ main.cpython-312.pyc
   │  │  └─ simplex.cpython-312.pyc
   │  ├─ api.py
   │  ├─ ejemplos.py
   │  ├─ main.py
   │  ├─ requirements.txt
   │  ├─ run_tests.py
   │  ├─ simplex.py
   │  ├─ test_cases.json
   │  ├─ test_simplex.py
   │  └─ venv
   │     ├─ bin
   │     │  ├─ Activate.ps1
   │     │  ├─ activate
   │     │  ├─ activate.csh
   │     │  ├─ activate.fish
   │     │  ├─ dotenv
   │     │  ├─ f2py
   │     │  ├─ fastapi
   │     │  ├─ idna
   │     │  ├─ normalizer
   │     │  ├─ numpy-config
   │     │  ├─ pip
   │     │  ├─ pip3
   │     │  ├─ pip3.12
   │     │  ├─ python
   │     │  ├─ python3
   │     │  ├─ python3.12
   │     │  └─ uvicorn
   │     ├─ include
   │     │  └─ python3.12
   │     ├─ lib
   │     │  └─ python3.12
   │     │     └─ site-packages
   │     │        ├─ 81d243bd2c585b0f4821__mypyc.cpython-312-x86_64-linux-gnu.so
   │     │        ├─ __pycache__
   │     │        │  └─ typing_extensions.cpython-312.pyc
   │     │        ├─ annotated_doc
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ main.cpython-312.pyc
   │     │        │  ├─ main.py
   │     │        │  └─ py.typed
   │     │        ├─ annotated_doc-0.0.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ annotated_types
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ test_cases.cpython-312.pyc
   │     │        │  ├─ py.typed
   │     │        │  └─ test_cases.py
   │     │        ├─ annotated_types-0.7.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ anyio
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ from_thread.cpython-312.pyc
   │     │        │  │  ├─ functools.cpython-312.pyc
   │     │        │  │  ├─ lowlevel.cpython-312.pyc
   │     │        │  │  ├─ pytest_plugin.cpython-312.pyc
   │     │        │  │  ├─ to_interpreter.cpython-312.pyc
   │     │        │  │  ├─ to_process.cpython-312.pyc
   │     │        │  │  └─ to_thread.cpython-312.pyc
   │     │        │  ├─ _backends
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio.cpython-312.pyc
   │     │        │  │  │  └─ _trio.cpython-312.pyc
   │     │        │  │  ├─ _asyncio.py
   │     │        │  │  └─ _trio.py
   │     │        │  ├─ _core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio_selector_thread.cpython-312.pyc
   │     │        │  │  │  ├─ _contextmanagers.cpython-312.pyc
   │     │        │  │  │  ├─ _eventloop.cpython-312.pyc
   │     │        │  │  │  ├─ _exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ _fileio.cpython-312.pyc
   │     │        │  │  │  ├─ _resources.cpython-312.pyc
   │     │        │  │  │  ├─ _signals.cpython-312.pyc
   │     │        │  │  │  ├─ _sockets.cpython-312.pyc
   │     │        │  │  │  ├─ _streams.cpython-312.pyc
   │     │        │  │  │  ├─ _subprocesses.cpython-312.pyc
   │     │        │  │  │  ├─ _synchronization.cpython-312.pyc
   │     │        │  │  │  ├─ _tasks.cpython-312.pyc
   │     │        │  │  │  ├─ _tempfile.cpython-312.pyc
   │     │        │  │  │  ├─ _testing.cpython-312.pyc
   │     │        │  │  │  └─ _typedattr.cpython-312.pyc
   │     │        │  │  ├─ _asyncio_selector_thread.py
   │     │        │  │  ├─ _contextmanagers.py
   │     │        │  │  ├─ _eventloop.py
   │     │        │  │  ├─ _exceptions.py
   │     │        │  │  ├─ _fileio.py
   │     │        │  │  ├─ _resources.py
   │     │        │  │  ├─ _signals.py
   │     │        │  │  ├─ _sockets.py
   │     │        │  │  ├─ _streams.py
   │     │        │  │  ├─ _subprocesses.py
   │     │        │  │  ├─ _synchronization.py
   │     │        │  │  ├─ _tasks.py
   │     │        │  │  ├─ _tempfile.py
   │     │        │  │  ├─ _testing.py
   │     │        │  │  └─ _typedattr.py
   │     │        │  ├─ abc
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _eventloop.cpython-312.pyc
   │     │        │  │  │  ├─ _resources.cpython-312.pyc
   │     │        │  │  │  ├─ _sockets.cpython-312.pyc
   │     │        │  │  │  ├─ _streams.cpython-312.pyc
   │     │        │  │  │  ├─ _subprocesses.cpython-312.pyc
   │     │        │  │  │  ├─ _tasks.cpython-312.pyc
   │     │        │  │  │  └─ _testing.cpython-312.pyc
   │     │        │  │  ├─ _eventloop.py
   │     │        │  │  ├─ _resources.py
   │     │        │  │  ├─ _sockets.py
   │     │        │  │  ├─ _streams.py
   │     │        │  │  ├─ _subprocesses.py
   │     │        │  │  ├─ _tasks.py
   │     │        │  │  └─ _testing.py
   │     │        │  ├─ from_thread.py
   │     │        │  ├─ functools.py
   │     │        │  ├─ lowlevel.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ pytest_plugin.py
   │     │        │  ├─ streams
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ buffered.cpython-312.pyc
   │     │        │  │  │  ├─ file.cpython-312.pyc
   │     │        │  │  │  ├─ memory.cpython-312.pyc
   │     │        │  │  │  ├─ stapled.cpython-312.pyc
   │     │        │  │  │  ├─ text.cpython-312.pyc
   │     │        │  │  │  └─ tls.cpython-312.pyc
   │     │        │  │  ├─ buffered.py
   │     │        │  │  ├─ file.py
   │     │        │  │  ├─ memory.py
   │     │        │  │  ├─ stapled.py
   │     │        │  │  ├─ text.py
   │     │        │  │  └─ tls.py
   │     │        │  ├─ to_interpreter.py
   │     │        │  ├─ to_process.py
   │     │        │  └─ to_thread.py
   │     │        ├─ anyio-4.13.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ certifi
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  └─ core.cpython-312.pyc
   │     │        │  ├─ cacert.pem
   │     │        │  ├─ core.py
   │     │        │  └─ py.typed
   │     │        ├─ certifi-2026.5.20.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ charset_normalizer
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ api.cpython-312.pyc
   │     │        │  │  ├─ cd.cpython-312.pyc
   │     │        │  │  ├─ constant.cpython-312.pyc
   │     │        │  │  ├─ legacy.cpython-312.pyc
   │     │        │  │  ├─ md.cpython-312.pyc
   │     │        │  │  ├─ models.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ api.py
   │     │        │  ├─ cd.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ cd.py
   │     │        │  ├─ cli
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __main__.py
   │     │        │  │  └─ __pycache__
   │     │        │  │     ├─ __init__.cpython-312.pyc
   │     │        │  │     └─ __main__.cpython-312.pyc
   │     │        │  ├─ constant.py
   │     │        │  ├─ legacy.py
   │     │        │  ├─ md.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ md.py
   │     │        │  ├─ models.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ utils.py
   │     │        │  └─ version.py
   │     │        ├─ charset_normalizer-3.4.7.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ click
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  ├─ _termui_impl.cpython-312.pyc
   │     │        │  │  ├─ _textwrap.cpython-312.pyc
   │     │        │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  ├─ _winconsole.cpython-312.pyc
   │     │        │  │  ├─ core.cpython-312.pyc
   │     │        │  │  ├─ decorators.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ formatting.cpython-312.pyc
   │     │        │  │  ├─ globals.cpython-312.pyc
   │     │        │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  ├─ shell_completion.cpython-312.pyc
   │     │        │  │  ├─ termui.cpython-312.pyc
   │     │        │  │  ├─ testing.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  └─ utils.cpython-312.pyc
   │     │        │  ├─ _compat.py
   │     │        │  ├─ _termui_impl.py
   │     │        │  ├─ _textwrap.py
   │     │        │  ├─ _utils.py
   │     │        │  ├─ _winconsole.py
   │     │        │  ├─ core.py
   │     │        │  ├─ decorators.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ formatting.py
   │     │        │  ├─ globals.py
   │     │        │  ├─ parser.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ shell_completion.py
   │     │        │  ├─ termui.py
   │     │        │  ├─ testing.py
   │     │        │  ├─ types.py
   │     │        │  └─ utils.py
   │     │        ├─ click-8.4.1.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.txt
   │     │        ├─ dotenv
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ ipython.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  ├─ variables.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ cli.py
   │     │        │  ├─ ipython.py
   │     │        │  ├─ main.py
   │     │        │  ├─ parser.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ variables.py
   │     │        │  └─ version.py
   │     │        ├─ environs
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  └─ types.cpython-312.pyc
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ py.typed
   │     │        │  └─ types.py
   │     │        ├─ environs-15.0.1.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ fastapi
   │     │        │  ├─ .agents
   │     │        │  │  └─ skills
   │     │        │  │     └─ fastapi
   │     │        │  │        ├─ SKILL.md
   │     │        │  │        └─ references
   │     │        │  │           ├─ dependencies.md
   │     │        │  │           ├─ other-tools.md
   │     │        │  │           └─ streaming.md
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ applications.cpython-312.pyc
   │     │        │  │  ├─ background.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ concurrency.cpython-312.pyc
   │     │        │  │  ├─ datastructures.cpython-312.pyc
   │     │        │  │  ├─ encoders.cpython-312.pyc
   │     │        │  │  ├─ exception_handlers.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ logger.cpython-312.pyc
   │     │        │  │  ├─ param_functions.cpython-312.pyc
   │     │        │  │  ├─ params.cpython-312.pyc
   │     │        │  │  ├─ requests.cpython-312.pyc
   │     │        │  │  ├─ responses.cpython-312.pyc
   │     │        │  │  ├─ routing.cpython-312.pyc
   │     │        │  │  ├─ sse.cpython-312.pyc
   │     │        │  │  ├─ staticfiles.cpython-312.pyc
   │     │        │  │  ├─ templating.cpython-312.pyc
   │     │        │  │  ├─ testclient.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ websockets.cpython-312.pyc
   │     │        │  ├─ _compat
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ shared.cpython-312.pyc
   │     │        │  │  │  └─ v2.cpython-312.pyc
   │     │        │  │  ├─ shared.py
   │     │        │  │  └─ v2.py
   │     │        │  ├─ applications.py
   │     │        │  ├─ background.py
   │     │        │  ├─ cli.py
   │     │        │  ├─ concurrency.py
   │     │        │  ├─ datastructures.py
   │     │        │  ├─ dependencies
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ models.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ encoders.py
   │     │        │  ├─ exception_handlers.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ logger.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asyncexitstack.cpython-312.pyc
   │     │        │  │  │  ├─ cors.cpython-312.pyc
   │     │        │  │  │  ├─ gzip.cpython-312.pyc
   │     │        │  │  │  ├─ httpsredirect.cpython-312.pyc
   │     │        │  │  │  ├─ trustedhost.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ asyncexitstack.py
   │     │        │  │  ├─ cors.py
   │     │        │  │  ├─ gzip.py
   │     │        │  │  ├─ httpsredirect.py
   │     │        │  │  ├─ trustedhost.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ openapi
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ constants.cpython-312.pyc
   │     │        │  │  │  ├─ docs.cpython-312.pyc
   │     │        │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ constants.py
   │     │        │  │  ├─ docs.py
   │     │        │  │  ├─ models.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ param_functions.py
   │     │        │  ├─ params.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ requests.py
   │     │        │  ├─ responses.py
   │     │        │  ├─ routing.py
   │     │        │  ├─ security
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ api_key.cpython-312.pyc
   │     │        │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  ├─ http.cpython-312.pyc
   │     │        │  │  │  ├─ oauth2.cpython-312.pyc
   │     │        │  │  │  ├─ open_id_connect_url.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ api_key.py
   │     │        │  │  ├─ base.py
   │     │        │  │  ├─ http.py
   │     │        │  │  ├─ oauth2.py
   │     │        │  │  ├─ open_id_connect_url.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ sse.py
   │     │        │  ├─ staticfiles.py
   │     │        │  ├─ templating.py
   │     │        │  ├─ testclient.py
   │     │        │  ├─ types.py
   │     │        │  ├─ utils.py
   │     │        │  └─ websockets.py
   │     │        ├─ fastapi-0.136.3.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ fastapi_cors
   │     │        │  ├─ VERSION
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ env.cpython-312.pyc
   │     │        │  │  └─ main.cpython-312.pyc
   │     │        │  ├─ env.py
   │     │        │  └─ main.py
   │     │        ├─ fastapi_cors-0.0.6.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ h11
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _abnf.cpython-312.pyc
   │     │        │  │  ├─ _connection.cpython-312.pyc
   │     │        │  │  ├─ _events.cpython-312.pyc
   │     │        │  │  ├─ _headers.cpython-312.pyc
   │     │        │  │  ├─ _readers.cpython-312.pyc
   │     │        │  │  ├─ _receivebuffer.cpython-312.pyc
   │     │        │  │  ├─ _state.cpython-312.pyc
   │     │        │  │  ├─ _util.cpython-312.pyc
   │     │        │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  └─ _writers.cpython-312.pyc
   │     │        │  ├─ _abnf.py
   │     │        │  ├─ _connection.py
   │     │        │  ├─ _events.py
   │     │        │  ├─ _headers.py
   │     │        │  ├─ _readers.py
   │     │        │  ├─ _receivebuffer.py
   │     │        │  ├─ _state.py
   │     │        │  ├─ _util.py
   │     │        │  ├─ _version.py
   │     │        │  ├─ _writers.py
   │     │        │  └─ py.typed
   │     │        ├─ h11-0.16.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE.txt
   │     │        │  └─ top_level.txt
   │     │        ├─ idna
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ codec.cpython-312.pyc
   │     │        │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  ├─ core.cpython-312.pyc
   │     │        │  │  ├─ idnadata.cpython-312.pyc
   │     │        │  │  ├─ intranges.cpython-312.pyc
   │     │        │  │  ├─ package_data.cpython-312.pyc
   │     │        │  │  └─ uts46data.cpython-312.pyc
   │     │        │  ├─ cli.py
   │     │        │  ├─ codec.py
   │     │        │  ├─ compat.py
   │     │        │  ├─ core.py
   │     │        │  ├─ idnadata.py
   │     │        │  ├─ intranges.py
   │     │        │  ├─ package_data.py
   │     │        │  ├─ py.typed
   │     │        │  └─ uts46data.py
   │     │        ├─ idna-3.16.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.md
   │     │        ├─ marshmallow
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ class_registry.cpython-312.pyc
   │     │        │  │  ├─ constants.cpython-312.pyc
   │     │        │  │  ├─ decorators.cpython-312.pyc
   │     │        │  │  ├─ error_store.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ orderedset.cpython-312.pyc
   │     │        │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ validate.cpython-312.pyc
   │     │        │  ├─ class_registry.py
   │     │        │  ├─ constants.py
   │     │        │  ├─ decorators.py
   │     │        │  ├─ error_store.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ experimental
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ context.cpython-312.pyc
   │     │        │  │  └─ context.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ orderedset.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ schema.py
   │     │        │  ├─ types.py
   │     │        │  ├─ utils.py
   │     │        │  └─ validate.py
   │     │        ├─ marshmallow-4.3.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ numpy
   │     │        │  ├─ __config__.py
   │     │        │  ├─ __config__.pyi
   │     │        │  ├─ __init__.cython-30.pxd
   │     │        │  ├─ __init__.pxd
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __init__.pyi
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __config__.cpython-312.pyc
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _array_api_info.cpython-312.pyc
   │     │        │  │  ├─ _configtool.cpython-312.pyc
   │     │        │  │  ├─ _distributor_init.cpython-312.pyc
   │     │        │  │  ├─ _expired_attrs_2_0.cpython-312.pyc
   │     │        │  │  ├─ _globals.cpython-312.pyc
   │     │        │  │  ├─ _pytesttester.cpython-312.pyc
   │     │        │  │  ├─ conftest.cpython-312.pyc
   │     │        │  │  ├─ dtypes.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ matlib.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ _array_api_info.py
   │     │        │  ├─ _array_api_info.pyi
   │     │        │  ├─ _configtool.py
   │     │        │  ├─ _configtool.pyi
   │     │        │  ├─ _core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _add_newdocs.cpython-312.pyc
   │     │        │  │  │  ├─ _add_newdocs_scalars.cpython-312.pyc
   │     │        │  │  │  ├─ _asarray.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_ctypes.cpython-312.pyc
   │     │        │  │  │  ├─ _exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ _internal.cpython-312.pyc
   │     │        │  │  │  ├─ _methods.cpython-312.pyc
   │     │        │  │  │  ├─ _string_helpers.cpython-312.pyc
   │     │        │  │  │  ├─ _type_aliases.cpython-312.pyc
   │     │        │  │  │  ├─ _ufunc_config.cpython-312.pyc
   │     │        │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │  │  ├─ cversions.cpython-312.pyc
   │     │        │  │  │  ├─ defchararray.cpython-312.pyc
   │     │        │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │  │  ├─ function_base.cpython-312.pyc
   │     │        │  │  │  ├─ getlimits.cpython-312.pyc
   │     │        │  │  │  ├─ memmap.cpython-312.pyc
   │     │        │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  ├─ printoptions.cpython-312.pyc
   │     │        │  │  │  ├─ records.cpython-312.pyc
   │     │        │  │  │  ├─ shape_base.cpython-312.pyc
   │     │        │  │  │  ├─ strings.cpython-312.pyc
   │     │        │  │  │  └─ umath.cpython-312.pyc
   │     │        │  │  ├─ _add_newdocs.py
   │     │        │  │  ├─ _add_newdocs.pyi
   │     │        │  │  ├─ _add_newdocs_scalars.py
   │     │        │  │  ├─ _add_newdocs_scalars.pyi
   │     │        │  │  ├─ _asarray.py
   │     │        │  │  ├─ _asarray.pyi
   │     │        │  │  ├─ _dtype.py
   │     │        │  │  ├─ _dtype.pyi
   │     │        │  │  ├─ _dtype_ctypes.py
   │     │        │  │  ├─ _dtype_ctypes.pyi
   │     │        │  │  ├─ _exceptions.py
   │     │        │  │  ├─ _exceptions.pyi
   │     │        │  │  ├─ _internal.py
   │     │        │  │  ├─ _internal.pyi
   │     │        │  │  ├─ _methods.py
   │     │        │  │  ├─ _methods.pyi
   │     │        │  │  ├─ _multiarray_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _multiarray_umath.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _operand_flag_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _rational_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _simd.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _simd.pyi
   │     │        │  │  ├─ _string_helpers.py
   │     │        │  │  ├─ _string_helpers.pyi
   │     │        │  │  ├─ _struct_ufunc_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _type_aliases.py
   │     │        │  │  ├─ _type_aliases.pyi
   │     │        │  │  ├─ _ufunc_config.py
   │     │        │  │  ├─ _ufunc_config.pyi
   │     │        │  │  ├─ _umath_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _umath_tests.pyi
   │     │        │  │  ├─ arrayprint.py
   │     │        │  │  ├─ arrayprint.pyi
   │     │        │  │  ├─ cversions.py
   │     │        │  │  ├─ defchararray.py
   │     │        │  │  ├─ defchararray.pyi
   │     │        │  │  ├─ einsumfunc.py
   │     │        │  │  ├─ einsumfunc.pyi
   │     │        │  │  ├─ fromnumeric.py
   │     │        │  │  ├─ fromnumeric.pyi
   │     │        │  │  ├─ function_base.py
   │     │        │  │  ├─ function_base.pyi
   │     │        │  │  ├─ getlimits.py
   │     │        │  │  ├─ getlimits.pyi
   │     │        │  │  ├─ include
   │     │        │  │  │  └─ numpy
   │     │        │  │  │     ├─ __multiarray_api.c
   │     │        │  │  │     ├─ __multiarray_api.h
   │     │        │  │  │     ├─ __ufunc_api.c
   │     │        │  │  │     ├─ __ufunc_api.h
   │     │        │  │  │     ├─ _neighborhood_iterator_imp.h
   │     │        │  │  │     ├─ _numpyconfig.h
   │     │        │  │  │     ├─ _public_dtype_api_table.h
   │     │        │  │  │     ├─ arrayobject.h
   │     │        │  │  │     ├─ arrayscalars.h
   │     │        │  │  │     ├─ dtype_api.h
   │     │        │  │  │     ├─ halffloat.h
   │     │        │  │  │     ├─ ndarrayobject.h
   │     │        │  │  │     ├─ ndarraytypes.h
   │     │        │  │  │     ├─ npy_2_compat.h
   │     │        │  │  │     ├─ npy_2_complexcompat.h
   │     │        │  │  │     ├─ npy_3kcompat.h
   │     │        │  │  │     ├─ npy_common.h
   │     │        │  │  │     ├─ npy_cpu.h
   │     │        │  │  │     ├─ npy_endian.h
   │     │        │  │  │     ├─ npy_math.h
   │     │        │  │  │     ├─ npy_no_deprecated_api.h
   │     │        │  │  │     ├─ npy_os.h
   │     │        │  │  │     ├─ numpyconfig.h
   │     │        │  │  │     ├─ random
   │     │        │  │  │     │  ├─ LICENSE.txt
   │     │        │  │  │     │  ├─ bitgen.h
   │     │        │  │  │     │  ├─ distributions.h
   │     │        │  │  │     │  └─ libdivide.h
   │     │        │  │  │     ├─ ufuncobject.h
   │     │        │  │  │     └─ utils.h
   │     │        │  │  ├─ lib
   │     │        │  │  │  ├─ libnpymath.a
   │     │        │  │  │  ├─ npy-pkg-config
   │     │        │  │  │  │  ├─ mlib.ini
   │     │        │  │  │  │  └─ npymath.ini
   │     │        │  │  │  └─ pkgconfig
   │     │        │  │  │     └─ numpy.pc
   │     │        │  │  ├─ memmap.py
   │     │        │  │  ├─ memmap.pyi
   │     │        │  │  ├─ multiarray.py
   │     │        │  │  ├─ multiarray.pyi
   │     │        │  │  ├─ numeric.py
   │     │        │  │  ├─ numeric.pyi
   │     │        │  │  ├─ numerictypes.py
   │     │        │  │  ├─ numerictypes.pyi
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ printoptions.py
   │     │        │  │  ├─ printoptions.pyi
   │     │        │  │  ├─ records.py
   │     │        │  │  ├─ records.pyi
   │     │        │  │  ├─ shape_base.py
   │     │        │  │  ├─ shape_base.pyi
   │     │        │  │  ├─ strings.py
   │     │        │  │  ├─ strings.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ _locales.cpython-312.pyc
   │     │        │  │  │  │  ├─ _natype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_abc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_api.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_argparse.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_api_info.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_coercion.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_interface.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraymethod.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayobject.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayprint.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_casting_floatingpoint_errors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_casting_unittests.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_conversion_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cpu_dispatcher.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cpu_features.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_custom_dtypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cython.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_datetime.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_defchararray.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_dlpack.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_dtype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_einsum.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_errstate.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_extint128.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_finfo.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_function_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_getlimits.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_half.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_hashtable.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_indexerrors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_indexing.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_item_selection.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_limited_api.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_longdouble.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mem_overlap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mem_policy.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_memmap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multiarray.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multiprocessing.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multithreading.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nditer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nep50_promotions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_numeric.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_numerictypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_overrides.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_print.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_protocols.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_records.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalar_ctors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalar_methods.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarbuffer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarinherit.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarmath.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarprint.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_shape_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_simd.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_simd_module.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_stringdtype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_strings.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_ufunc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath_accuracy.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath_complex.cpython-312.pyc
   │     │        │  │  │  │  └─ test_unicode.cpython-312.pyc
   │     │        │  │  │  ├─ _locales.py
   │     │        │  │  │  ├─ _natype.py
   │     │        │  │  │  ├─ data
   │     │        │  │  │  │  ├─ astype_copy.pkl
   │     │        │  │  │  │  ├─ generate_umath_validation_data.cpp
   │     │        │  │  │  │  ├─ recarray_from_file.fits
   │     │        │  │  │  │  ├─ umath-validation-set-README.txt
   │     │        │  │  │  │  ├─ umath-validation-set-arccos.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arccosh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arcsin.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arcsinh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arctan.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arctanh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cbrt.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cos.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cosh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-exp.csv
   │     │        │  │  │  │  ├─ umath-validation-set-exp2.csv
   │     │        │  │  │  │  ├─ umath-validation-set-expm1.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log10.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log1p.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log2.csv
   │     │        │  │  │  │  ├─ umath-validation-set-sin.csv
   │     │        │  │  │  │  ├─ umath-validation-set-sinh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-tan.csv
   │     │        │  │  │  │  └─ umath-validation-set-tanh.csv
   │     │        │  │  │  ├─ examples
   │     │        │  │  │  │  ├─ cython
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  └─ setup.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ checks.pyx
   │     │        │  │  │  │  │  ├─ meson.build
   │     │        │  │  │  │  │  └─ setup.py
   │     │        │  │  │  │  └─ limited_api
   │     │        │  │  │  │     ├─ __pycache__
   │     │        │  │  │  │     │  └─ setup.cpython-312.pyc
   │     │        │  │  │  │     ├─ limited_api1.c
   │     │        │  │  │  │     ├─ limited_api2.pyx
   │     │        │  │  │  │     ├─ limited_api_latest.c
   │     │        │  │  │  │     ├─ meson.build
   │     │        │  │  │  │     └─ setup.py
   │     │        │  │  │  ├─ test__exceptions.py
   │     │        │  │  │  ├─ test_abc.py
   │     │        │  │  │  ├─ test_api.py
   │     │        │  │  │  ├─ test_argparse.py
   │     │        │  │  │  ├─ test_array_api_info.py
   │     │        │  │  │  ├─ test_array_coercion.py
   │     │        │  │  │  ├─ test_array_interface.py
   │     │        │  │  │  ├─ test_arraymethod.py
   │     │        │  │  │  ├─ test_arrayobject.py
   │     │        │  │  │  ├─ test_arrayprint.py
   │     │        │  │  │  ├─ test_casting_floatingpoint_errors.py
   │     │        │  │  │  ├─ test_casting_unittests.py
   │     │        │  │  │  ├─ test_conversion_utils.py
   │     │        │  │  │  ├─ test_cpu_dispatcher.py
   │     │        │  │  │  ├─ test_cpu_features.py
   │     │        │  │  │  ├─ test_custom_dtypes.py
   │     │        │  │  │  ├─ test_cython.py
   │     │        │  │  │  ├─ test_datetime.py
   │     │        │  │  │  ├─ test_defchararray.py
   │     │        │  │  │  ├─ test_deprecations.py
   │     │        │  │  │  ├─ test_dlpack.py
   │     │        │  │  │  ├─ test_dtype.py
   │     │        │  │  │  ├─ test_einsum.py
   │     │        │  │  │  ├─ test_errstate.py
   │     │        │  │  │  ├─ test_extint128.py
   │     │        │  │  │  ├─ test_finfo.py
   │     │        │  │  │  ├─ test_function_base.py
   │     │        │  │  │  ├─ test_getlimits.py
   │     │        │  │  │  ├─ test_half.py
   │     │        │  │  │  ├─ test_hashtable.py
   │     │        │  │  │  ├─ test_indexerrors.py
   │     │        │  │  │  ├─ test_indexing.py
   │     │        │  │  │  ├─ test_item_selection.py
   │     │        │  │  │  ├─ test_limited_api.py
   │     │        │  │  │  ├─ test_longdouble.py
   │     │        │  │  │  ├─ test_mem_overlap.py
   │     │        │  │  │  ├─ test_mem_policy.py
   │     │        │  │  │  ├─ test_memmap.py
   │     │        │  │  │  ├─ test_multiarray.py
   │     │        │  │  │  ├─ test_multiprocessing.py
   │     │        │  │  │  ├─ test_multithreading.py
   │     │        │  │  │  ├─ test_nditer.py
   │     │        │  │  │  ├─ test_nep50_promotions.py
   │     │        │  │  │  ├─ test_numeric.py
   │     │        │  │  │  ├─ test_numerictypes.py
   │     │        │  │  │  ├─ test_overrides.py
   │     │        │  │  │  ├─ test_print.py
   │     │        │  │  │  ├─ test_protocols.py
   │     │        │  │  │  ├─ test_records.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_scalar_ctors.py
   │     │        │  │  │  ├─ test_scalar_methods.py
   │     │        │  │  │  ├─ test_scalarbuffer.py
   │     │        │  │  │  ├─ test_scalarinherit.py
   │     │        │  │  │  ├─ test_scalarmath.py
   │     │        │  │  │  ├─ test_scalarprint.py
   │     │        │  │  │  ├─ test_shape_base.py
   │     │        │  │  │  ├─ test_simd.py
   │     │        │  │  │  ├─ test_simd_module.py
   │     │        │  │  │  ├─ test_stringdtype.py
   │     │        │  │  │  ├─ test_strings.py
   │     │        │  │  │  ├─ test_ufunc.py
   │     │        │  │  │  ├─ test_umath.py
   │     │        │  │  │  ├─ test_umath_accuracy.py
   │     │        │  │  │  ├─ test_umath_complex.py
   │     │        │  │  │  └─ test_unicode.py
   │     │        │  │  ├─ umath.py
   │     │        │  │  └─ umath.pyi
   │     │        │  ├─ _distributor_init.py
   │     │        │  ├─ _distributor_init.pyi
   │     │        │  ├─ _expired_attrs_2_0.py
   │     │        │  ├─ _expired_attrs_2_0.pyi
   │     │        │  ├─ _globals.py
   │     │        │  ├─ _globals.pyi
   │     │        │  ├─ _pyinstaller
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ hook-numpy.cpython-312.pyc
   │     │        │  │  ├─ hook-numpy.py
   │     │        │  │  ├─ hook-numpy.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ pyinstaller-smoke.cpython-312.pyc
   │     │        │  │     │  └─ test_pyinstaller.cpython-312.pyc
   │     │        │  │     ├─ pyinstaller-smoke.py
   │     │        │  │     └─ test_pyinstaller.py
   │     │        │  ├─ _pytesttester.py
   │     │        │  ├─ _pytesttester.pyi
   │     │        │  ├─ _typing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _add_docstring.cpython-312.pyc
   │     │        │  │  │  ├─ _array_like.cpython-312.pyc
   │     │        │  │  │  ├─ _char_codes.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_like.cpython-312.pyc
   │     │        │  │  │  ├─ _extended_precision.cpython-312.pyc
   │     │        │  │  │  ├─ _nbit.cpython-312.pyc
   │     │        │  │  │  ├─ _nbit_base.cpython-312.pyc
   │     │        │  │  │  ├─ _nested_sequence.cpython-312.pyc
   │     │        │  │  │  ├─ _scalars.cpython-312.pyc
   │     │        │  │  │  ├─ _shape.cpython-312.pyc
   │     │        │  │  │  └─ _ufunc.cpython-312.pyc
   │     │        │  │  ├─ _add_docstring.py
   │     │        │  │  ├─ _array_like.py
   │     │        │  │  ├─ _char_codes.py
   │     │        │  │  ├─ _dtype_like.py
   │     │        │  │  ├─ _extended_precision.py
   │     │        │  │  ├─ _nbit.py
   │     │        │  │  ├─ _nbit_base.py
   │     │        │  │  ├─ _nbit_base.pyi
   │     │        │  │  ├─ _nested_sequence.py
   │     │        │  │  ├─ _scalars.py
   │     │        │  │  ├─ _shape.py
   │     │        │  │  ├─ _ufunc.py
   │     │        │  │  └─ _ufunc.pyi
   │     │        │  ├─ _utils
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _convertions.cpython-312.pyc
   │     │        │  │  │  ├─ _inspect.cpython-312.pyc
   │     │        │  │  │  └─ _pep440.cpython-312.pyc
   │     │        │  │  ├─ _convertions.py
   │     │        │  │  ├─ _convertions.pyi
   │     │        │  │  ├─ _inspect.py
   │     │        │  │  ├─ _inspect.pyi
   │     │        │  │  ├─ _pep440.py
   │     │        │  │  └─ _pep440.pyi
   │     │        │  ├─ char
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ conftest.py
   │     │        │  ├─ core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_ctypes.cpython-312.pyc
   │     │        │  │  │  ├─ _internal.cpython-312.pyc
   │     │        │  │  │  ├─ _multiarray_umath.cpython-312.pyc
   │     │        │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │  │  ├─ defchararray.cpython-312.pyc
   │     │        │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │  │  ├─ function_base.cpython-312.pyc
   │     │        │  │  │  ├─ getlimits.cpython-312.pyc
   │     │        │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  ├─ records.cpython-312.pyc
   │     │        │  │  │  ├─ shape_base.cpython-312.pyc
   │     │        │  │  │  └─ umath.cpython-312.pyc
   │     │        │  │  ├─ _dtype.py
   │     │        │  │  ├─ _dtype.pyi
   │     │        │  │  ├─ _dtype_ctypes.py
   │     │        │  │  ├─ _dtype_ctypes.pyi
   │     │        │  │  ├─ _internal.py
   │     │        │  │  ├─ _multiarray_umath.py
   │     │        │  │  ├─ _utils.py
   │     │        │  │  ├─ arrayprint.py
   │     │        │  │  ├─ defchararray.py
   │     │        │  │  ├─ einsumfunc.py
   │     │        │  │  ├─ fromnumeric.py
   │     │        │  │  ├─ function_base.py
   │     │        │  │  ├─ getlimits.py
   │     │        │  │  ├─ multiarray.py
   │     │        │  │  ├─ numeric.py
   │     │        │  │  ├─ numerictypes.py
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ records.py
   │     │        │  │  ├─ shape_base.py
   │     │        │  │  └─ umath.py
   │     │        │  ├─ ctypeslib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _ctypeslib.cpython-312.pyc
   │     │        │  │  ├─ _ctypeslib.py
   │     │        │  │  └─ _ctypeslib.pyi
   │     │        │  ├─ doc
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  └─ ufuncs.cpython-312.pyc
   │     │        │  │  └─ ufuncs.py
   │     │        │  ├─ dtypes.py
   │     │        │  ├─ dtypes.pyi
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ exceptions.pyi
   │     │        │  ├─ f2py
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __main__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  │  ├─ _isocbind.cpython-312.pyc
   │     │        │  │  │  ├─ _src_pyf.cpython-312.pyc
   │     │        │  │  │  ├─ auxfuncs.cpython-312.pyc
   │     │        │  │  │  ├─ capi_maps.cpython-312.pyc
   │     │        │  │  │  ├─ cb_rules.cpython-312.pyc
   │     │        │  │  │  ├─ cfuncs.cpython-312.pyc
   │     │        │  │  │  ├─ common_rules.cpython-312.pyc
   │     │        │  │  │  ├─ crackfortran.cpython-312.pyc
   │     │        │  │  │  ├─ diagnose.cpython-312.pyc
   │     │        │  │  │  ├─ f2py2e.cpython-312.pyc
   │     │        │  │  │  ├─ f90mod_rules.cpython-312.pyc
   │     │        │  │  │  ├─ func2subr.cpython-312.pyc
   │     │        │  │  │  ├─ rules.cpython-312.pyc
   │     │        │  │  │  ├─ symbolic.cpython-312.pyc
   │     │        │  │  │  └─ use_rules.cpython-312.pyc
   │     │        │  │  ├─ __version__.py
   │     │        │  │  ├─ __version__.pyi
   │     │        │  │  ├─ _backends
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __init__.pyi
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _backend.cpython-312.pyc
   │     │        │  │  │  │  ├─ _distutils.cpython-312.pyc
   │     │        │  │  │  │  └─ _meson.cpython-312.pyc
   │     │        │  │  │  ├─ _backend.py
   │     │        │  │  │  ├─ _backend.pyi
   │     │        │  │  │  ├─ _distutils.py
   │     │        │  │  │  ├─ _distutils.pyi
   │     │        │  │  │  ├─ _meson.py
   │     │        │  │  │  ├─ _meson.pyi
   │     │        │  │  │  └─ meson.build.template
   │     │        │  │  ├─ _isocbind.py
   │     │        │  │  ├─ _isocbind.pyi
   │     │        │  │  ├─ _src_pyf.py
   │     │        │  │  ├─ _src_pyf.pyi
   │     │        │  │  ├─ auxfuncs.py
   │     │        │  │  ├─ auxfuncs.pyi
   │     │        │  │  ├─ capi_maps.py
   │     │        │  │  ├─ capi_maps.pyi
   │     │        │  │  ├─ cb_rules.py
   │     │        │  │  ├─ cb_rules.pyi
   │     │        │  │  ├─ cfuncs.py
   │     │        │  │  ├─ cfuncs.pyi
   │     │        │  │  ├─ common_rules.py
   │     │        │  │  ├─ common_rules.pyi
   │     │        │  │  ├─ crackfortran.py
   │     │        │  │  ├─ crackfortran.pyi
   │     │        │  │  ├─ diagnose.py
   │     │        │  │  ├─ diagnose.pyi
   │     │        │  │  ├─ f2py2e.py
   │     │        │  │  ├─ f2py2e.pyi
   │     │        │  │  ├─ f90mod_rules.py
   │     │        │  │  ├─ f90mod_rules.pyi
   │     │        │  │  ├─ func2subr.py
   │     │        │  │  ├─ func2subr.pyi
   │     │        │  │  ├─ rules.py
   │     │        │  │  ├─ rules.pyi
   │     │        │  │  ├─ setup.cfg
   │     │        │  │  ├─ src
   │     │        │  │  │  ├─ fortranobject.c
   │     │        │  │  │  └─ fortranobject.h
   │     │        │  │  ├─ symbolic.py
   │     │        │  │  ├─ symbolic.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_abstract_interface.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_from_pyobj.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_assumed_shape.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_block_docstring.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_callback.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_capi_maps.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_common.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_crackfortran.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_data.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_docs.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_f2cmap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_f2py2e.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_isoc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_kind.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mixed.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_modules.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_parameter.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_pyf_src.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_quoted_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_complex.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_integer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_logical.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_real.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_routines.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_semicolon_split.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_size.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_string.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_symbolic.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_value_attrspec.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ src
   │     │        │  │  │  │  ├─ abstract_interface
   │     │        │  │  │  │  │  ├─ foo.f90
   │     │        │  │  │  │  │  └─ gh18403_mod.f90
   │     │        │  │  │  │  ├─ array_from_pyobj
   │     │        │  │  │  │  │  └─ wrapmodule.c
   │     │        │  │  │  │  ├─ assumed_shape
   │     │        │  │  │  │  │  ├─ .f2py_f2cmap
   │     │        │  │  │  │  │  ├─ foo_free.f90
   │     │        │  │  │  │  │  ├─ foo_mod.f90
   │     │        │  │  │  │  │  ├─ foo_use.f90
   │     │        │  │  │  │  │  └─ precision.f90
   │     │        │  │  │  │  ├─ block_docstring
   │     │        │  │  │  │  │  └─ foo.f
   │     │        │  │  │  │  ├─ callback
   │     │        │  │  │  │  │  ├─ foo.f
   │     │        │  │  │  │  │  ├─ gh17797.f90
   │     │        │  │  │  │  │  ├─ gh18335.f90
   │     │        │  │  │  │  │  ├─ gh25211.f
   │     │        │  │  │  │  │  ├─ gh25211.pyf
   │     │        │  │  │  │  │  └─ gh26681.f90
   │     │        │  │  │  │  ├─ cli
   │     │        │  │  │  │  │  ├─ gh_22819.pyf
   │     │        │  │  │  │  │  ├─ hi77.f
   │     │        │  │  │  │  │  └─ hiworld.f90
   │     │        │  │  │  │  ├─ common
   │     │        │  │  │  │  │  ├─ block.f
   │     │        │  │  │  │  │  └─ gh19161.f90
   │     │        │  │  │  │  ├─ crackfortran
   │     │        │  │  │  │  │  ├─ accesstype.f90
   │     │        │  │  │  │  │  ├─ common_with_division.f
   │     │        │  │  │  │  │  ├─ data_common.f
   │     │        │  │  │  │  │  ├─ data_multiplier.f
   │     │        │  │  │  │  │  ├─ data_stmts.f90
   │     │        │  │  │  │  │  ├─ data_with_comments.f
   │     │        │  │  │  │  │  ├─ foo_deps.f90
   │     │        │  │  │  │  │  ├─ gh15035.f
   │     │        │  │  │  │  │  ├─ gh17859.f
   │     │        │  │  │  │  │  ├─ gh22648.pyf
   │     │        │  │  │  │  │  ├─ gh23533.f
   │     │        │  │  │  │  │  ├─ gh23598.f90
   │     │        │  │  │  │  │  ├─ gh23598Warn.f90
   │     │        │  │  │  │  │  ├─ gh23879.f90
   │     │        │  │  │  │  │  ├─ gh27697.f90
   │     │        │  │  │  │  │  ├─ gh2848.f90
   │     │        │  │  │  │  │  ├─ operators.f90
   │     │        │  │  │  │  │  ├─ privatemod.f90
   │     │        │  │  │  │  │  ├─ publicmod.f90
   │     │        │  │  │  │  │  ├─ pubprivmod.f90
   │     │        │  │  │  │  │  └─ unicode_comment.f90
   │     │        │  │  │  │  ├─ f2cmap
   │     │        │  │  │  │  │  ├─ .f2py_f2cmap
   │     │        │  │  │  │  │  └─ isoFortranEnvMap.f90
   │     │        │  │  │  │  ├─ isocintrin
   │     │        │  │  │  │  │  └─ isoCtests.f90
   │     │        │  │  │  │  ├─ kind
   │     │        │  │  │  │  │  └─ foo.f90
   │     │        │  │  │  │  ├─ mixed
   │     │        │  │  │  │  │  ├─ foo.f
   │     │        │  │  │  │  │  ├─ foo_fixed.f90
   │     │        │  │  │  │  │  └─ foo_free.f90
   │     │        │  │  │  │  ├─ modules
   │     │        │  │  │  │  │  ├─ gh25337
   │     │        │  │  │  │  │  │  ├─ data.f90
   │     │        │  │  │  │  │  │  └─ use_data.f90
   │     │        │  │  │  │  │  ├─ gh26920
   │     │        │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
   │     │        │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
   │     │        │  │  │  │  │  ├─ module_data_docstring.f90
   │     │        │  │  │  │  │  └─ use_modules.f90
   │     │        │  │  │  │  ├─ negative_bounds
   │     │        │  │  │  │  │  └─ issue_20853.f90
   │     │        │  │  │  │  ├─ parameter
   │     │        │  │  │  │  │  ├─ constant_array.f90
   │     │        │  │  │  │  │  ├─ constant_both.f90
   │     │        │  │  │  │  │  ├─ constant_compound.f90
   │     │        │  │  │  │  │  ├─ constant_integer.f90
   │     │        │  │  │  │  │  ├─ constant_non_compound.f90
   │     │        │  │  │  │  │  └─ constant_real.f90
   │     │        │  │  │  │  ├─ quoted_character
   │     │        │  │  │  │  │  └─ foo.f
   │     │        │  │  │  │  ├─ regression
   │     │        │  │  │  │  │  ├─ AB.inc
   │     │        │  │  │  │  │  ├─ assignOnlyModule.f90
   │     │        │  │  │  │  │  ├─ datonly.f90
   │     │        │  │  │  │  │  ├─ f77comments.f
   │     │        │  │  │  │  │  ├─ f77fixedform.f95
   │     │        │  │  │  │  │  ├─ f90continuation.f90
   │     │        │  │  │  │  │  ├─ incfile.f90
   │     │        │  │  │  │  │  ├─ inout.f90
   │     │        │  │  │  │  │  ├─ lower_f2py_fortran.f90
   │     │        │  │  │  │  │  └─ mod_derived_types.f90
   │     │        │  │  │  │  ├─ return_character
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_complex
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_integer
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_logical
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_real
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ routines
   │     │        │  │  │  │  │  ├─ funcfortranname.f
   │     │        │  │  │  │  │  ├─ funcfortranname.pyf
   │     │        │  │  │  │  │  ├─ subrout.f
   │     │        │  │  │  │  │  └─ subrout.pyf
   │     │        │  │  │  │  ├─ size
   │     │        │  │  │  │  │  └─ foo.f90
   │     │        │  │  │  │  ├─ string
   │     │        │  │  │  │  │  ├─ char.f90
   │     │        │  │  │  │  │  ├─ fixed_string.f90
   │     │        │  │  │  │  │  ├─ gh24008.f
   │     │        │  │  │  │  │  ├─ gh24662.f90
   │     │        │  │  │  │  │  ├─ gh25286.f90
   │     │        │  │  │  │  │  ├─ gh25286.pyf
   │     │        │  │  │  │  │  ├─ gh25286_bc.pyf
   │     │        │  │  │  │  │  ├─ scalar_string.f90
   │     │        │  │  │  │  │  └─ string.f
   │     │        │  │  │  │  └─ value_attrspec
   │     │        │  │  │  │     └─ gh21665.f90
   │     │        │  │  │  ├─ test_abstract_interface.py
   │     │        │  │  │  ├─ test_array_from_pyobj.py
   │     │        │  │  │  ├─ test_assumed_shape.py
   │     │        │  │  │  ├─ test_block_docstring.py
   │     │        │  │  │  ├─ test_callback.py
   │     │        │  │  │  ├─ test_capi_maps.py
   │     │        │  │  │  ├─ test_character.py
   │     │        │  │  │  ├─ test_common.py
   │     │        │  │  │  ├─ test_crackfortran.py
   │     │        │  │  │  ├─ test_data.py
   │     │        │  │  │  ├─ test_docs.py
   │     │        │  │  │  ├─ test_f2cmap.py
   │     │        │  │  │  ├─ test_f2py2e.py
   │     │        │  │  │  ├─ test_isoc.py
   │     │        │  │  │  ├─ test_kind.py
   │     │        │  │  │  ├─ test_mixed.py
   │     │        │  │  │  ├─ test_modules.py
   │     │        │  │  │  ├─ test_parameter.py
   │     │        │  │  │  ├─ test_pyf_src.py
   │     │        │  │  │  ├─ test_quoted_character.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_return_character.py
   │     │        │  │  │  ├─ test_return_complex.py
   │     │        │  │  │  ├─ test_return_integer.py
   │     │        │  │  │  ├─ test_return_logical.py
   │     │        │  │  │  ├─ test_return_real.py
   │     │        │  │  │  ├─ test_routines.py
   │     │        │  │  │  ├─ test_semicolon_split.py
   │     │        │  │  │  ├─ test_size.py
   │     │        │  │  │  ├─ test_string.py
   │     │        │  │  │  ├─ test_symbolic.py
   │     │        │  │  │  ├─ test_value_attrspec.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ use_rules.py
   │     │        │  │  └─ use_rules.pyi
   │     │        │  ├─ fft
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _helper.cpython-312.pyc
   │     │        │  │  │  └─ _pocketfft.cpython-312.pyc
   │     │        │  │  ├─ _helper.py
   │     │        │  │  ├─ _helper.pyi
   │     │        │  │  ├─ _pocketfft.py
   │     │        │  │  ├─ _pocketfft.pyi
   │     │        │  │  ├─ _pocketfft_umath.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_helper.cpython-312.pyc
   │     │        │  │     │  └─ test_pocketfft.cpython-312.pyc
   │     │        │  │     ├─ test_helper.py
   │     │        │  │     └─ test_pocketfft.py
   │     │        │  ├─ lib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _array_utils_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arraypad_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arraysetops_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arrayterator_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _datasource.cpython-312.pyc
   │     │        │  │  │  ├─ _format_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _function_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _histograms_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _index_tricks_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _iotools.cpython-312.pyc
   │     │        │  │  │  ├─ _nanfunctions_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _npyio_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _polynomial_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _scimath_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _shape_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _stride_tricks_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _twodim_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _type_check_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _ufunclike_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _user_array_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _utils_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  │  ├─ array_utils.cpython-312.pyc
   │     │        │  │  │  ├─ format.cpython-312.pyc
   │     │        │  │  │  ├─ introspect.cpython-312.pyc
   │     │        │  │  │  ├─ mixins.cpython-312.pyc
   │     │        │  │  │  ├─ npyio.cpython-312.pyc
   │     │        │  │  │  ├─ recfunctions.cpython-312.pyc
   │     │        │  │  │  ├─ scimath.cpython-312.pyc
   │     │        │  │  │  ├─ stride_tricks.cpython-312.pyc
   │     │        │  │  │  └─ user_array.cpython-312.pyc
   │     │        │  │  ├─ _array_utils_impl.py
   │     │        │  │  ├─ _array_utils_impl.pyi
   │     │        │  │  ├─ _arraypad_impl.py
   │     │        │  │  ├─ _arraypad_impl.pyi
   │     │        │  │  ├─ _arraysetops_impl.py
   │     │        │  │  ├─ _arraysetops_impl.pyi
   │     │        │  │  ├─ _arrayterator_impl.py
   │     │        │  │  ├─ _arrayterator_impl.pyi
   │     │        │  │  ├─ _datasource.py
   │     │        │  │  ├─ _datasource.pyi
   │     │        │  │  ├─ _format_impl.py
   │     │        │  │  ├─ _format_impl.pyi
   │     │        │  │  ├─ _function_base_impl.py
   │     │        │  │  ├─ _function_base_impl.pyi
   │     │        │  │  ├─ _histograms_impl.py
   │     │        │  │  ├─ _histograms_impl.pyi
   │     │        │  │  ├─ _index_tricks_impl.py
   │     │        │  │  ├─ _index_tricks_impl.pyi
   │     │        │  │  ├─ _iotools.py
   │     │        │  │  ├─ _iotools.pyi
   │     │        │  │  ├─ _nanfunctions_impl.py
   │     │        │  │  ├─ _nanfunctions_impl.pyi
   │     │        │  │  ├─ _npyio_impl.py
   │     │        │  │  ├─ _npyio_impl.pyi
   │     │        │  │  ├─ _polynomial_impl.py
   │     │        │  │  ├─ _polynomial_impl.pyi
   │     │        │  │  ├─ _scimath_impl.py
   │     │        │  │  ├─ _scimath_impl.pyi
   │     │        │  │  ├─ _shape_base_impl.py
   │     │        │  │  ├─ _shape_base_impl.pyi
   │     │        │  │  ├─ _stride_tricks_impl.py
   │     │        │  │  ├─ _stride_tricks_impl.pyi
   │     │        │  │  ├─ _twodim_base_impl.py
   │     │        │  │  ├─ _twodim_base_impl.pyi
   │     │        │  │  ├─ _type_check_impl.py
   │     │        │  │  ├─ _type_check_impl.pyi
   │     │        │  │  ├─ _ufunclike_impl.py
   │     │        │  │  ├─ _ufunclike_impl.pyi
   │     │        │  │  ├─ _user_array_impl.py
   │     │        │  │  ├─ _user_array_impl.pyi
   │     │        │  │  ├─ _utils_impl.py
   │     │        │  │  ├─ _utils_impl.pyi
   │     │        │  │  ├─ _version.py
   │     │        │  │  ├─ _version.pyi
   │     │        │  │  ├─ array_utils.py
   │     │        │  │  ├─ array_utils.pyi
   │     │        │  │  ├─ format.py
   │     │        │  │  ├─ format.pyi
   │     │        │  │  ├─ introspect.py
   │     │        │  │  ├─ introspect.pyi
   │     │        │  │  ├─ mixins.py
   │     │        │  │  ├─ mixins.pyi
   │     │        │  │  ├─ npyio.py
   │     │        │  │  ├─ npyio.pyi
   │     │        │  │  ├─ recfunctions.py
   │     │        │  │  ├─ recfunctions.pyi
   │     │        │  │  ├─ scimath.py
   │     │        │  │  ├─ scimath.pyi
   │     │        │  │  ├─ stride_tricks.py
   │     │        │  │  ├─ stride_tricks.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__datasource.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__iotools.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__version.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraypad.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraysetops.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayterator.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_format.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_function_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_histograms.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_index_tricks.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_io.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_loadtxt.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mixins.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nanfunctions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_packbits.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_polynomial.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_recfunctions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_shape_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_stride_tricks.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_twodim_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_type_check.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_ufunclike.cpython-312.pyc
   │     │        │  │  │  │  └─ test_utils.cpython-312.pyc
   │     │        │  │  │  ├─ data
   │     │        │  │  │  │  ├─ py2-np0-objarr.npy
   │     │        │  │  │  │  ├─ py2-objarr.npy
   │     │        │  │  │  │  ├─ py2-objarr.npz
   │     │        │  │  │  │  ├─ py3-objarr.npy
   │     │        │  │  │  │  ├─ py3-objarr.npz
   │     │        │  │  │  │  ├─ python3.npy
   │     │        │  │  │  │  └─ win64python2.npy
   │     │        │  │  │  ├─ test__datasource.py
   │     │        │  │  │  ├─ test__iotools.py
   │     │        │  │  │  ├─ test__version.py
   │     │        │  │  │  ├─ test_array_utils.py
   │     │        │  │  │  ├─ test_arraypad.py
   │     │        │  │  │  ├─ test_arraysetops.py
   │     │        │  │  │  ├─ test_arrayterator.py
   │     │        │  │  │  ├─ test_format.py
   │     │        │  │  │  ├─ test_function_base.py
   │     │        │  │  │  ├─ test_histograms.py
   │     │        │  │  │  ├─ test_index_tricks.py
   │     │        │  │  │  ├─ test_io.py
   │     │        │  │  │  ├─ test_loadtxt.py
   │     │        │  │  │  ├─ test_mixins.py
   │     │        │  │  │  ├─ test_nanfunctions.py
   │     │        │  │  │  ├─ test_packbits.py
   │     │        │  │  │  ├─ test_polynomial.py
   │     │        │  │  │  ├─ test_recfunctions.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_shape_base.py
   │     │        │  │  │  ├─ test_stride_tricks.py
   │     │        │  │  │  ├─ test_twodim_base.py
   │     │        │  │  │  ├─ test_type_check.py
   │     │        │  │  │  ├─ test_ufunclike.py
   │     │        │  │  │  └─ test_utils.py
   │     │        │  │  ├─ user_array.py
   │     │        │  │  └─ user_array.pyi
   │     │        │  ├─ linalg
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _linalg.cpython-312.pyc
   │     │        │  │  ├─ _linalg.py
   │     │        │  │  ├─ _linalg.pyi
   │     │        │  │  ├─ _umath_linalg.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _umath_linalg.pyi
   │     │        │  │  ├─ lapack_lite.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ lapack_lite.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │     │  ├─ test_linalg.cpython-312.pyc
   │     │        │  │     │  └─ test_regression.cpython-312.pyc
   │     │        │  │     ├─ test_deprecations.py
   │     │        │  │     ├─ test_linalg.py
   │     │        │  │     └─ test_regression.py
   │     │        │  ├─ ma
   │     │        │  │  ├─ API_CHANGES.txt
   │     │        │  │  ├─ LICENSE
   │     │        │  │  ├─ README.rst
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  ├─ extras.cpython-312.pyc
   │     │        │  │  │  ├─ mrecords.cpython-312.pyc
   │     │        │  │  │  └─ testutils.cpython-312.pyc
   │     │        │  │  ├─ core.py
   │     │        │  │  ├─ core.pyi
   │     │        │  │  ├─ extras.py
   │     │        │  │  ├─ extras.pyi
   │     │        │  │  ├─ mrecords.py
   │     │        │  │  ├─ mrecords.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayobject.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_core.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_extras.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mrecords.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_old_ma.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  └─ test_subclassing.cpython-312.pyc
   │     │        │  │  │  ├─ test_arrayobject.py
   │     │        │  │  │  ├─ test_core.py
   │     │        │  │  │  ├─ test_deprecations.py
   │     │        │  │  │  ├─ test_extras.py
   │     │        │  │  │  ├─ test_mrecords.py
   │     │        │  │  │  ├─ test_old_ma.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  └─ test_subclassing.py
   │     │        │  │  ├─ testutils.py
   │     │        │  │  └─ testutils.pyi
   │     │        │  ├─ matlib.py
   │     │        │  ├─ matlib.pyi
   │     │        │  ├─ matrixlib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ defmatrix.cpython-312.pyc
   │     │        │  │  ├─ defmatrix.py
   │     │        │  │  ├─ defmatrix.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_defmatrix.cpython-312.pyc
   │     │        │  │     │  ├─ test_interaction.cpython-312.pyc
   │     │        │  │     │  ├─ test_masked_matrix.cpython-312.pyc
   │     │        │  │     │  ├─ test_matrix_linalg.cpython-312.pyc
   │     │        │  │     │  ├─ test_multiarray.cpython-312.pyc
   │     │        │  │     │  ├─ test_numeric.cpython-312.pyc
   │     │        │  │     │  └─ test_regression.cpython-312.pyc
   │     │        │  │     ├─ test_defmatrix.py
   │     │        │  │     ├─ test_interaction.py
   │     │        │  │     ├─ test_masked_matrix.py
   │     │        │  │     ├─ test_matrix_linalg.py
   │     │        │  │     ├─ test_multiarray.py
   │     │        │  │     ├─ test_numeric.py
   │     │        │  │     └─ test_regression.py
   │     │        │  ├─ polynomial
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _polybase.cpython-312.pyc
   │     │        │  │  │  ├─ chebyshev.cpython-312.pyc
   │     │        │  │  │  ├─ hermite.cpython-312.pyc
   │     │        │  │  │  ├─ hermite_e.cpython-312.pyc
   │     │        │  │  │  ├─ laguerre.cpython-312.pyc
   │     │        │  │  │  ├─ legendre.cpython-312.pyc
   │     │        │  │  │  ├─ polynomial.cpython-312.pyc
   │     │        │  │  │  └─ polyutils.cpython-312.pyc
   │     │        │  │  ├─ _polybase.py
   │     │        │  │  ├─ _polybase.pyi
   │     │        │  │  ├─ _polytypes.pyi
   │     │        │  │  ├─ chebyshev.py
   │     │        │  │  ├─ chebyshev.pyi
   │     │        │  │  ├─ hermite.py
   │     │        │  │  ├─ hermite.pyi
   │     │        │  │  ├─ hermite_e.py
   │     │        │  │  ├─ hermite_e.pyi
   │     │        │  │  ├─ laguerre.py
   │     │        │  │  ├─ laguerre.pyi
   │     │        │  │  ├─ legendre.py
   │     │        │  │  ├─ legendre.pyi
   │     │        │  │  ├─ polynomial.py
   │     │        │  │  ├─ polynomial.pyi
   │     │        │  │  ├─ polyutils.py
   │     │        │  │  ├─ polyutils.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_chebyshev.cpython-312.pyc
   │     │        │  │     │  ├─ test_classes.cpython-312.pyc
   │     │        │  │     │  ├─ test_hermite.cpython-312.pyc
   │     │        │  │     │  ├─ test_hermite_e.cpython-312.pyc
   │     │        │  │     │  ├─ test_laguerre.cpython-312.pyc
   │     │        │  │     │  ├─ test_legendre.cpython-312.pyc
   │     │        │  │     │  ├─ test_polynomial.cpython-312.pyc
   │     │        │  │     │  ├─ test_polyutils.cpython-312.pyc
   │     │        │  │     │  ├─ test_printing.cpython-312.pyc
   │     │        │  │     │  └─ test_symbol.cpython-312.pyc
   │     │        │  │     ├─ test_chebyshev.py
   │     │        │  │     ├─ test_classes.py
   │     │        │  │     ├─ test_hermite.py
   │     │        │  │     ├─ test_hermite_e.py
   │     │        │  │     ├─ test_laguerre.py
   │     │        │  │     ├─ test_legendre.py
   │     │        │  │     ├─ test_polynomial.py
   │     │        │  │     ├─ test_polyutils.py
   │     │        │  │     ├─ test_printing.py
   │     │        │  │     └─ test_symbol.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ random
   │     │        │  │  ├─ LICENSE.md
   │     │        │  │  ├─ __init__.pxd
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _pickle.cpython-312.pyc
   │     │        │  │  ├─ _bounded_integers.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _bounded_integers.pxd
   │     │        │  │  ├─ _bounded_integers.pyi
   │     │        │  │  ├─ _common.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _common.pxd
   │     │        │  │  ├─ _common.pyi
   │     │        │  │  ├─ _examples
   │     │        │  │  │  ├─ cffi
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ extending.cpython-312.pyc
   │     │        │  │  │  │  │  └─ parse.cpython-312.pyc
   │     │        │  │  │  │  ├─ extending.py
   │     │        │  │  │  │  └─ parse.py
   │     │        │  │  │  ├─ cython
   │     │        │  │  │  │  ├─ extending.pyx
   │     │        │  │  │  │  ├─ extending_distributions.pyx
   │     │        │  │  │  │  └─ meson.build
   │     │        │  │  │  └─ numba
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ extending.cpython-312.pyc
   │     │        │  │  │     │  └─ extending_distributions.cpython-312.pyc
   │     │        │  │  │     ├─ extending.py
   │     │        │  │  │     └─ extending_distributions.py
   │     │        │  │  ├─ _generator.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _generator.pyi
   │     │        │  │  ├─ _mt19937.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _mt19937.pyi
   │     │        │  │  ├─ _pcg64.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _pcg64.pyi
   │     │        │  │  ├─ _philox.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _philox.pyi
   │     │        │  │  ├─ _pickle.py
   │     │        │  │  ├─ _pickle.pyi
   │     │        │  │  ├─ _sfc64.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _sfc64.pyi
   │     │        │  │  ├─ bit_generator.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ bit_generator.pxd
   │     │        │  │  ├─ bit_generator.pyi
   │     │        │  │  ├─ c_distributions.pxd
   │     │        │  │  ├─ lib
   │     │        │  │  │  └─ libnpyrandom.a
   │     │        │  │  ├─ mtrand.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ mtrand.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_direct.cpython-312.pyc
   │     │        │  │     │  ├─ test_extending.cpython-312.pyc
   │     │        │  │     │  ├─ test_generator_mt19937.cpython-312.pyc
   │     │        │  │     │  ├─ test_generator_mt19937_regressions.cpython-312.pyc
   │     │        │  │     │  ├─ test_random.cpython-312.pyc
   │     │        │  │     │  ├─ test_randomstate.cpython-312.pyc
   │     │        │  │     │  ├─ test_randomstate_regression.cpython-312.pyc
   │     │        │  │     │  ├─ test_regression.cpython-312.pyc
   │     │        │  │     │  ├─ test_seed_sequence.cpython-312.pyc
   │     │        │  │     │  └─ test_smoke.cpython-312.pyc
   │     │        │  │     ├─ data
   │     │        │  │     │  ├─ __init__.py
   │     │        │  │     │  ├─ __pycache__
   │     │        │  │     │  │  └─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ generator_pcg64_np121.pkl.gz
   │     │        │  │     │  ├─ generator_pcg64_np126.pkl.gz
   │     │        │  │     │  ├─ mt19937-testset-1.csv
   │     │        │  │     │  ├─ mt19937-testset-2.csv
   │     │        │  │     │  ├─ pcg64-testset-1.csv
   │     │        │  │     │  ├─ pcg64-testset-2.csv
   │     │        │  │     │  ├─ pcg64dxsm-testset-1.csv
   │     │        │  │     │  ├─ pcg64dxsm-testset-2.csv
   │     │        │  │     │  ├─ philox-testset-1.csv
   │     │        │  │     │  ├─ philox-testset-2.csv
   │     │        │  │     │  ├─ sfc64-testset-1.csv
   │     │        │  │     │  ├─ sfc64-testset-2.csv
   │     │        │  │     │  └─ sfc64_np126.pkl.gz
   │     │        │  │     ├─ test_direct.py
   │     │        │  │     ├─ test_extending.py
   │     │        │  │     ├─ test_generator_mt19937.py
   │     │        │  │     ├─ test_generator_mt19937_regressions.py
   │     │        │  │     ├─ test_random.py
   │     │        │  │     ├─ test_randomstate.py
   │     │        │  │     ├─ test_randomstate_regression.py
   │     │        │  │     ├─ test_regression.py
   │     │        │  │     ├─ test_seed_sequence.py
   │     │        │  │     └─ test_smoke.py
   │     │        │  ├─ rec
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ strings
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ testing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  └─ print_coercion_tables.cpython-312.pyc
   │     │        │  │  ├─ _private
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __init__.pyi
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ extbuild.cpython-312.pyc
   │     │        │  │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ extbuild.py
   │     │        │  │  │  ├─ extbuild.pyi
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ utils.pyi
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ print_coercion_tables.py
   │     │        │  │  ├─ print_coercion_tables.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  └─ test_utils.cpython-312.pyc
   │     │        │  │     └─ test_utils.py
   │     │        │  ├─ tests
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ test__all__.cpython-312.pyc
   │     │        │  │  │  ├─ test_configtool.cpython-312.pyc
   │     │        │  │  │  ├─ test_ctypeslib.cpython-312.pyc
   │     │        │  │  │  ├─ test_lazyloading.cpython-312.pyc
   │     │        │  │  │  ├─ test_matlib.cpython-312.pyc
   │     │        │  │  │  ├─ test_numpy_config.cpython-312.pyc
   │     │        │  │  │  ├─ test_numpy_version.cpython-312.pyc
   │     │        │  │  │  ├─ test_public_api.cpython-312.pyc
   │     │        │  │  │  ├─ test_reloading.cpython-312.pyc
   │     │        │  │  │  ├─ test_scripts.cpython-312.pyc
   │     │        │  │  │  └─ test_warnings.cpython-312.pyc
   │     │        │  │  ├─ test__all__.py
   │     │        │  │  ├─ test_configtool.py
   │     │        │  │  ├─ test_ctypeslib.py
   │     │        │  │  ├─ test_lazyloading.py
   │     │        │  │  ├─ test_matlib.py
   │     │        │  │  ├─ test_numpy_config.py
   │     │        │  │  ├─ test_numpy_version.py
   │     │        │  │  ├─ test_public_api.py
   │     │        │  │  ├─ test_reloading.py
   │     │        │  │  ├─ test_scripts.py
   │     │        │  │  └─ test_warnings.py
   │     │        │  ├─ typing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ mypy_plugin.cpython-312.pyc
   │     │        │  │  ├─ mypy_plugin.py
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_isfile.cpython-312.pyc
   │     │        │  │     │  ├─ test_runtime.cpython-312.pyc
   │     │        │  │     │  └─ test_typing.cpython-312.pyc
   │     │        │  │     ├─ data
   │     │        │  │     │  ├─ fail
   │     │        │  │     │  │  ├─ arithmetic.pyi
   │     │        │  │     │  │  ├─ array_constructors.pyi
   │     │        │  │     │  │  ├─ array_like.pyi
   │     │        │  │     │  │  ├─ array_pad.pyi
   │     │        │  │     │  │  ├─ arrayprint.pyi
   │     │        │  │     │  │  ├─ arrayterator.pyi
   │     │        │  │     │  │  ├─ bitwise_ops.pyi
   │     │        │  │     │  │  ├─ char.pyi
   │     │        │  │     │  │  ├─ chararray.pyi
   │     │        │  │     │  │  ├─ comparisons.pyi
   │     │        │  │     │  │  ├─ constants.pyi
   │     │        │  │     │  │  ├─ datasource.pyi
   │     │        │  │     │  │  ├─ dtype.pyi
   │     │        │  │     │  │  ├─ einsumfunc.pyi
   │     │        │  │     │  │  ├─ flatiter.pyi
   │     │        │  │     │  │  ├─ fromnumeric.pyi
   │     │        │  │     │  │  ├─ histograms.pyi
   │     │        │  │     │  │  ├─ index_tricks.pyi
   │     │        │  │     │  │  ├─ lib_function_base.pyi
   │     │        │  │     │  │  ├─ lib_polynomial.pyi
   │     │        │  │     │  │  ├─ lib_utils.pyi
   │     │        │  │     │  │  ├─ lib_version.pyi
   │     │        │  │     │  │  ├─ linalg.pyi
   │     │        │  │     │  │  ├─ ma.pyi
   │     │        │  │     │  │  ├─ memmap.pyi
   │     │        │  │     │  │  ├─ modules.pyi
   │     │        │  │     │  │  ├─ multiarray.pyi
   │     │        │  │     │  │  ├─ ndarray.pyi
   │     │        │  │     │  │  ├─ ndarray_misc.pyi
   │     │        │  │     │  │  ├─ nditer.pyi
   │     │        │  │     │  │  ├─ nested_sequence.pyi
   │     │        │  │     │  │  ├─ npyio.pyi
   │     │        │  │     │  │  ├─ numerictypes.pyi
   │     │        │  │     │  │  ├─ random.pyi
   │     │        │  │     │  │  ├─ rec.pyi
   │     │        │  │     │  │  ├─ scalars.pyi
   │     │        │  │     │  │  ├─ shape.pyi
   │     │        │  │     │  │  ├─ shape_base.pyi
   │     │        │  │     │  │  ├─ stride_tricks.pyi
   │     │        │  │     │  │  ├─ strings.pyi
   │     │        │  │     │  │  ├─ testing.pyi
   │     │        │  │     │  │  ├─ twodim_base.pyi
   │     │        │  │     │  │  ├─ type_check.pyi
   │     │        │  │     │  │  ├─ ufunc_config.pyi
   │     │        │  │     │  │  ├─ ufunclike.pyi
   │     │        │  │     │  │  ├─ ufuncs.pyi
   │     │        │  │     │  │  └─ warnings_and_errors.pyi
   │     │        │  │     │  ├─ misc
   │     │        │  │     │  │  └─ extended_precision.pyi
   │     │        │  │     │  ├─ mypy.ini
   │     │        │  │     │  ├─ pass
   │     │        │  │     │  │  ├─ __pycache__
   │     │        │  │     │  │  │  ├─ arithmetic.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ array_constructors.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ array_like.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ arrayterator.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ bitwise_ops.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ comparisons.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ dtype.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ flatiter.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ index_tricks.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_user_array.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_utils.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_version.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ literal.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ma.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ mod.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ modules.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_conversion.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_misc.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_shape_manipulation.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ nditer.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ random.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ recfunctions.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ scalars.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ shape.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ simple.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufunc_config.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufunclike.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufuncs.cpython-312.pyc
   │     │        │  │     │  │  │  └─ warnings_and_errors.cpython-312.pyc
   │     │        │  │     │  │  ├─ arithmetic.py
   │     │        │  │     │  │  ├─ array_constructors.py
   │     │        │  │     │  │  ├─ array_like.py
   │     │        │  │     │  │  ├─ arrayprint.py
   │     │        │  │     │  │  ├─ arrayterator.py
   │     │        │  │     │  │  ├─ bitwise_ops.py
   │     │        │  │     │  │  ├─ comparisons.py
   │     │        │  │     │  │  ├─ dtype.py
   │     │        │  │     │  │  ├─ einsumfunc.py
   │     │        │  │     │  │  ├─ flatiter.py
   │     │        │  │     │  │  ├─ fromnumeric.py
   │     │        │  │     │  │  ├─ index_tricks.py
   │     │        │  │     │  │  ├─ lib_user_array.py
   │     │        │  │     │  │  ├─ lib_utils.py
   │     │        │  │     │  │  ├─ lib_version.py
   │     │        │  │     │  │  ├─ literal.py
   │     │        │  │     │  │  ├─ ma.py
   │     │        │  │     │  │  ├─ mod.py
   │     │        │  │     │  │  ├─ modules.py
   │     │        │  │     │  │  ├─ multiarray.py
   │     │        │  │     │  │  ├─ ndarray_conversion.py
   │     │        │  │     │  │  ├─ ndarray_misc.py
   │     │        │  │     │  │  ├─ ndarray_shape_manipulation.py
   │     │        │  │     │  │  ├─ nditer.py
   │     │        │  │     │  │  ├─ numeric.py
   │     │        │  │     │  │  ├─ numerictypes.py
   │     │        │  │     │  │  ├─ random.py
   │     │        │  │     │  │  ├─ recfunctions.py
   │     │        │  │     │  │  ├─ scalars.py
   │     │        │  │     │  │  ├─ shape.py
   │     │        │  │     │  │  ├─ simple.py
   │     │        │  │     │  │  ├─ ufunc_config.py
   │     │        │  │     │  │  ├─ ufunclike.py
   │     │        │  │     │  │  ├─ ufuncs.py
   │     │        │  │     │  │  └─ warnings_and_errors.py
   │     │        │  │     │  └─ reveal
   │     │        │  │     │     ├─ arithmetic.pyi
   │     │        │  │     │     ├─ array_api_info.pyi
   │     │        │  │     │     ├─ array_constructors.pyi
   │     │        │  │     │     ├─ arraypad.pyi
   │     │        │  │     │     ├─ arrayprint.pyi
   │     │        │  │     │     ├─ arraysetops.pyi
   │     │        │  │     │     ├─ arrayterator.pyi
   │     │        │  │     │     ├─ bitwise_ops.pyi
   │     │        │  │     │     ├─ char.pyi
   │     │        │  │     │     ├─ chararray.pyi
   │     │        │  │     │     ├─ comparisons.pyi
   │     │        │  │     │     ├─ constants.pyi
   │     │        │  │     │     ├─ ctypeslib.pyi
   │     │        │  │     │     ├─ datasource.pyi
   │     │        │  │     │     ├─ dtype.pyi
   │     │        │  │     │     ├─ einsumfunc.pyi
   │     │        │  │     │     ├─ emath.pyi
   │     │        │  │     │     ├─ fft.pyi
   │     │        │  │     │     ├─ flatiter.pyi
   │     │        │  │     │     ├─ fromnumeric.pyi
   │     │        │  │     │     ├─ getlimits.pyi
   │     │        │  │     │     ├─ histograms.pyi
   │     │        │  │     │     ├─ index_tricks.pyi
   │     │        │  │     │     ├─ lib_function_base.pyi
   │     │        │  │     │     ├─ lib_polynomial.pyi
   │     │        │  │     │     ├─ lib_utils.pyi
   │     │        │  │     │     ├─ lib_version.pyi
   │     │        │  │     │     ├─ linalg.pyi
   │     │        │  │     │     ├─ ma.pyi
   │     │        │  │     │     ├─ matrix.pyi
   │     │        │  │     │     ├─ memmap.pyi
   │     │        │  │     │     ├─ mod.pyi
   │     │        │  │     │     ├─ modules.pyi
   │     │        │  │     │     ├─ multiarray.pyi
   │     │        │  │     │     ├─ nbit_base_example.pyi
   │     │        │  │     │     ├─ ndarray_assignability.pyi
   │     │        │  │     │     ├─ ndarray_conversion.pyi
   │     │        │  │     │     ├─ ndarray_misc.pyi
   │     │        │  │     │     ├─ ndarray_shape_manipulation.pyi
   │     │        │  │     │     ├─ nditer.pyi
   │     │        │  │     │     ├─ nested_sequence.pyi
   │     │        │  │     │     ├─ npyio.pyi
   │     │        │  │     │     ├─ numeric.pyi
   │     │        │  │     │     ├─ numerictypes.pyi
   │     │        │  │     │     ├─ polynomial_polybase.pyi
   │     │        │  │     │     ├─ polynomial_polyutils.pyi
   │     │        │  │     │     ├─ polynomial_series.pyi
   │     │        │  │     │     ├─ random.pyi
   │     │        │  │     │     ├─ rec.pyi
   │     │        │  │     │     ├─ scalars.pyi
   │     │        │  │     │     ├─ shape.pyi
   │     │        │  │     │     ├─ shape_base.pyi
   │     │        │  │     │     ├─ stride_tricks.pyi
   │     │        │  │     │     ├─ strings.pyi
   │     │        │  │     │     ├─ testing.pyi
   │     │        │  │     │     ├─ twodim_base.pyi
   │     │        │  │     │     ├─ type_check.pyi
   │     │        │  │     │     ├─ ufunc_config.pyi
   │     │        │  │     │     ├─ ufunclike.pyi
   │     │        │  │     │     ├─ ufuncs.pyi
   │     │        │  │     │     └─ warnings_and_errors.pyi
   │     │        │  │     ├─ test_isfile.py
   │     │        │  │     ├─ test_runtime.py
   │     │        │  │     └─ test_typing.py
   │     │        │  ├─ version.py
   │     │        │  └─ version.pyi
   │     │        ├─ numpy-2.4.6.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     ├─ LICENSE.txt
   │     │        │     └─ numpy
   │     │        │        ├─ _core
   │     │        │        │  ├─ include
   │     │        │        │  │  └─ numpy
   │     │        │        │  │     └─ libdivide
   │     │        │        │  │        └─ LICENSE.txt
   │     │        │        │  └─ src
   │     │        │        │     ├─ common
   │     │        │        │     │  └─ pythoncapi-compat
   │     │        │        │     │     └─ COPYING
   │     │        │        │     ├─ highway
   │     │        │        │     │  └─ LICENSE
   │     │        │        │     ├─ multiarray
   │     │        │        │     │  └─ dragon4_LICENSE.txt
   │     │        │        │     ├─ npysort
   │     │        │        │     │  └─ x86-simd-sort
   │     │        │        │     │     └─ LICENSE.md
   │     │        │        │     └─ umath
   │     │        │        │        └─ svml
   │     │        │        │           └─ LICENSE
   │     │        │        ├─ fft
   │     │        │        │  └─ pocketfft
   │     │        │        │     └─ LICENSE.md
   │     │        │        ├─ linalg
   │     │        │        │  └─ lapack_lite
   │     │        │        │     └─ LICENSE.txt
   │     │        │        ├─ ma
   │     │        │        │  └─ LICENSE
   │     │        │        └─ random
   │     │        │           ├─ LICENSE.md
   │     │        │           └─ src
   │     │        │              ├─ distributions
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ mt19937
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ pcg64
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ philox
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ sfc64
   │     │        │              │  └─ LICENSE.md
   │     │        │              └─ splitmix64
   │     │        │                 └─ LICENSE.md
   │     │        ├─ numpy.libs
   │     │        │  ├─ libgfortran-040039e1-0352e75f.so.5.0.0
   │     │        │  ├─ libquadmath-96973f99-934c22de.so.0.0.0
   │     │        │  └─ libscipy_openblas64_-32a4b2a6.so
   │     │        ├─ pip
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pip-runner__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  └─ __pip-runner__.cpython-312.pyc
   │     │        │  ├─ _internal
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ build_env.cpython-312.pyc
   │     │        │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  ├─ configuration.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  ├─ pyproject.cpython-312.pyc
   │     │        │  │  │  ├─ self_outdated_check.cpython-312.pyc
   │     │        │  │  │  └─ wheel_builder.cpython-312.pyc
   │     │        │  │  ├─ build_env.py
   │     │        │  │  ├─ cache.py
   │     │        │  │  ├─ cli
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ autocompletion.cpython-312.pyc
   │     │        │  │  │  │  ├─ base_command.cpython-312.pyc
   │     │        │  │  │  │  ├─ cmdoptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ command_context.cpython-312.pyc
   │     │        │  │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  │  ├─ main_parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress_bars.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_command.cpython-312.pyc
   │     │        │  │  │  │  ├─ spinners.cpython-312.pyc
   │     │        │  │  │  │  └─ status_codes.cpython-312.pyc
   │     │        │  │  │  ├─ autocompletion.py
   │     │        │  │  │  ├─ base_command.py
   │     │        │  │  │  ├─ cmdoptions.py
   │     │        │  │  │  ├─ command_context.py
   │     │        │  │  │  ├─ main.py
   │     │        │  │  │  ├─ main_parser.py
   │     │        │  │  │  ├─ parser.py
   │     │        │  │  │  ├─ progress_bars.py
   │     │        │  │  │  ├─ req_command.py
   │     │        │  │  │  ├─ spinners.py
   │     │        │  │  │  └─ status_codes.py
   │     │        │  │  ├─ commands
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ check.cpython-312.pyc
   │     │        │  │  │  │  ├─ completion.cpython-312.pyc
   │     │        │  │  │  │  ├─ configuration.cpython-312.pyc
   │     │        │  │  │  │  ├─ debug.cpython-312.pyc
   │     │        │  │  │  │  ├─ download.cpython-312.pyc
   │     │        │  │  │  │  ├─ freeze.cpython-312.pyc
   │     │        │  │  │  │  ├─ hash.cpython-312.pyc
   │     │        │  │  │  │  ├─ help.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ inspect.cpython-312.pyc
   │     │        │  │  │  │  ├─ install.cpython-312.pyc
   │     │        │  │  │  │  ├─ list.cpython-312.pyc
   │     │        │  │  │  │  ├─ search.cpython-312.pyc
   │     │        │  │  │  │  ├─ show.cpython-312.pyc
   │     │        │  │  │  │  ├─ uninstall.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ check.py
   │     │        │  │  │  ├─ completion.py
   │     │        │  │  │  ├─ configuration.py
   │     │        │  │  │  ├─ debug.py
   │     │        │  │  │  ├─ download.py
   │     │        │  │  │  ├─ freeze.py
   │     │        │  │  │  ├─ hash.py
   │     │        │  │  │  ├─ help.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ inspect.py
   │     │        │  │  │  ├─ install.py
   │     │        │  │  │  ├─ list.py
   │     │        │  │  │  ├─ search.py
   │     │        │  │  │  ├─ show.py
   │     │        │  │  │  ├─ uninstall.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ configuration.py
   │     │        │  │  ├─ distributions
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  │  ├─ installed.cpython-312.pyc
   │     │        │  │  │  │  ├─ sdist.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ installed.py
   │     │        │  │  │  ├─ sdist.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ exceptions.py
   │     │        │  │  ├─ index
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ collector.cpython-312.pyc
   │     │        │  │  │  │  ├─ package_finder.cpython-312.pyc
   │     │        │  │  │  │  └─ sources.cpython-312.pyc
   │     │        │  │  │  ├─ collector.py
   │     │        │  │  │  ├─ package_finder.py
   │     │        │  │  │  └─ sources.py
   │     │        │  │  ├─ locations
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _distutils.cpython-312.pyc
   │     │        │  │  │  │  ├─ _sysconfig.cpython-312.pyc
   │     │        │  │  │  │  └─ base.cpython-312.pyc
   │     │        │  │  │  ├─ _distutils.py
   │     │        │  │  │  ├─ _sysconfig.py
   │     │        │  │  │  └─ base.py
   │     │        │  │  ├─ main.py
   │     │        │  │  ├─ metadata
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _json.cpython-312.pyc
   │     │        │  │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  │  └─ pkg_resources.cpython-312.pyc
   │     │        │  │  │  ├─ _json.py
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ importlib
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _dists.cpython-312.pyc
   │     │        │  │  │  │  │  └─ _envs.cpython-312.pyc
   │     │        │  │  │  │  ├─ _compat.py
   │     │        │  │  │  │  ├─ _dists.py
   │     │        │  │  │  │  └─ _envs.py
   │     │        │  │  │  └─ pkg_resources.py
   │     │        │  │  ├─ models
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ candidate.cpython-312.pyc
   │     │        │  │  │  │  ├─ direct_url.cpython-312.pyc
   │     │        │  │  │  │  ├─ format_control.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ installation_report.cpython-312.pyc
   │     │        │  │  │  │  ├─ link.cpython-312.pyc
   │     │        │  │  │  │  ├─ scheme.cpython-312.pyc
   │     │        │  │  │  │  ├─ search_scope.cpython-312.pyc
   │     │        │  │  │  │  ├─ selection_prefs.cpython-312.pyc
   │     │        │  │  │  │  ├─ target_python.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ candidate.py
   │     │        │  │  │  ├─ direct_url.py
   │     │        │  │  │  ├─ format_control.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ installation_report.py
   │     │        │  │  │  ├─ link.py
   │     │        │  │  │  ├─ scheme.py
   │     │        │  │  │  ├─ search_scope.py
   │     │        │  │  │  ├─ selection_prefs.py
   │     │        │  │  │  ├─ target_python.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ network
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ download.cpython-312.pyc
   │     │        │  │  │  │  ├─ lazy_wheel.cpython-312.pyc
   │     │        │  │  │  │  ├─ session.cpython-312.pyc
   │     │        │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  └─ xmlrpc.cpython-312.pyc
   │     │        │  │  │  ├─ auth.py
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ download.py
   │     │        │  │  │  ├─ lazy_wheel.py
   │     │        │  │  │  ├─ session.py
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ xmlrpc.py
   │     │        │  │  ├─ operations
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ check.cpython-312.pyc
   │     │        │  │  │  │  ├─ freeze.cpython-312.pyc
   │     │        │  │  │  │  └─ prepare.cpython-312.pyc
   │     │        │  │  │  ├─ build
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ build_tracker.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata_editable.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata_legacy.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ wheel.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ wheel_editable.cpython-312.pyc
   │     │        │  │  │  │  │  └─ wheel_legacy.cpython-312.pyc
   │     │        │  │  │  │  ├─ build_tracker.py
   │     │        │  │  │  │  ├─ metadata.py
   │     │        │  │  │  │  ├─ metadata_editable.py
   │     │        │  │  │  │  ├─ metadata_legacy.py
   │     │        │  │  │  │  ├─ wheel.py
   │     │        │  │  │  │  ├─ wheel_editable.py
   │     │        │  │  │  │  └─ wheel_legacy.py
   │     │        │  │  │  ├─ check.py
   │     │        │  │  │  ├─ freeze.py
   │     │        │  │  │  ├─ install
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ editable_legacy.cpython-312.pyc
   │     │        │  │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  │  ├─ editable_legacy.py
   │     │        │  │  │  │  └─ wheel.py
   │     │        │  │  │  └─ prepare.py
   │     │        │  │  ├─ pyproject.py
   │     │        │  │  ├─ req
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ constructors.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_file.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_install.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_set.cpython-312.pyc
   │     │        │  │  │  │  └─ req_uninstall.cpython-312.pyc
   │     │        │  │  │  ├─ constructors.py
   │     │        │  │  │  ├─ req_file.py
   │     │        │  │  │  ├─ req_install.py
   │     │        │  │  │  ├─ req_set.py
   │     │        │  │  │  └─ req_uninstall.py
   │     │        │  │  ├─ resolution
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  └─ base.cpython-312.pyc
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ legacy
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ resolver.cpython-312.pyc
   │     │        │  │  │  │  └─ resolver.py
   │     │        │  │  │  └─ resolvelib
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  ├─ base.cpython-312.pyc
   │     │        │  │  │     │  ├─ candidates.cpython-312.pyc
   │     │        │  │  │     │  ├─ factory.cpython-312.pyc
   │     │        │  │  │     │  ├─ found_candidates.cpython-312.pyc
   │     │        │  │  │     │  ├─ provider.cpython-312.pyc
   │     │        │  │  │     │  ├─ reporter.cpython-312.pyc
   │     │        │  │  │     │  ├─ requirements.cpython-312.pyc
   │     │        │  │  │     │  └─ resolver.cpython-312.pyc
   │     │        │  │  │     ├─ base.py
   │     │        │  │  │     ├─ candidates.py
   │     │        │  │  │     ├─ factory.py
   │     │        │  │  │     ├─ found_candidates.py
   │     │        │  │  │     ├─ provider.py
   │     │        │  │  │     ├─ reporter.py
   │     │        │  │  │     ├─ requirements.py
   │     │        │  │  │     └─ resolver.py
   │     │        │  │  ├─ self_outdated_check.py
   │     │        │  │  ├─ utils
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _jaraco_text.cpython-312.pyc
   │     │        │  │  │  │  ├─ _log.cpython-312.pyc
   │     │        │  │  │  │  ├─ appdirs.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ compatibility_tags.cpython-312.pyc
   │     │        │  │  │  │  ├─ datetime.cpython-312.pyc
   │     │        │  │  │  │  ├─ deprecation.cpython-312.pyc
   │     │        │  │  │  │  ├─ direct_url_helpers.cpython-312.pyc
   │     │        │  │  │  │  ├─ egg_link.cpython-312.pyc
   │     │        │  │  │  │  ├─ encoding.cpython-312.pyc
   │     │        │  │  │  │  ├─ entrypoints.cpython-312.pyc
   │     │        │  │  │  │  ├─ filesystem.cpython-312.pyc
   │     │        │  │  │  │  ├─ filetypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ glibc.cpython-312.pyc
   │     │        │  │  │  │  ├─ hashes.cpython-312.pyc
   │     │        │  │  │  │  ├─ inject_securetransport.cpython-312.pyc
   │     │        │  │  │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  │  │  ├─ misc.cpython-312.pyc
   │     │        │  │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  │  ├─ packaging.cpython-312.pyc
   │     │        │  │  │  │  ├─ setuptools_build.cpython-312.pyc
   │     │        │  │  │  │  ├─ subprocess.cpython-312.pyc
   │     │        │  │  │  │  ├─ temp_dir.cpython-312.pyc
   │     │        │  │  │  │  ├─ unpacking.cpython-312.pyc
   │     │        │  │  │  │  ├─ urls.cpython-312.pyc
   │     │        │  │  │  │  ├─ virtualenv.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ _jaraco_text.py
   │     │        │  │  │  ├─ _log.py
   │     │        │  │  │  ├─ appdirs.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ compatibility_tags.py
   │     │        │  │  │  ├─ datetime.py
   │     │        │  │  │  ├─ deprecation.py
   │     │        │  │  │  ├─ direct_url_helpers.py
   │     │        │  │  │  ├─ egg_link.py
   │     │        │  │  │  ├─ encoding.py
   │     │        │  │  │  ├─ entrypoints.py
   │     │        │  │  │  ├─ filesystem.py
   │     │        │  │  │  ├─ filetypes.py
   │     │        │  │  │  ├─ glibc.py
   │     │        │  │  │  ├─ hashes.py
   │     │        │  │  │  ├─ inject_securetransport.py
   │     │        │  │  │  ├─ logging.py
   │     │        │  │  │  ├─ misc.py
   │     │        │  │  │  ├─ models.py
   │     │        │  │  │  ├─ packaging.py
   │     │        │  │  │  ├─ setuptools_build.py
   │     │        │  │  │  ├─ subprocess.py
   │     │        │  │  │  ├─ temp_dir.py
   │     │        │  │  │  ├─ unpacking.py
   │     │        │  │  │  ├─ urls.py
   │     │        │  │  │  ├─ virtualenv.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ vcs
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ bazaar.cpython-312.pyc
   │     │        │  │  │  │  ├─ git.cpython-312.pyc
   │     │        │  │  │  │  ├─ mercurial.cpython-312.pyc
   │     │        │  │  │  │  ├─ subversion.cpython-312.pyc
   │     │        │  │  │  │  └─ versioncontrol.cpython-312.pyc
   │     │        │  │  │  ├─ bazaar.py
   │     │        │  │  │  ├─ git.py
   │     │        │  │  │  ├─ mercurial.py
   │     │        │  │  │  ├─ subversion.py
   │     │        │  │  │  └─ versioncontrol.py
   │     │        │  │  └─ wheel_builder.py
   │     │        │  ├─ _vendor
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ six.cpython-312.pyc
   │     │        │  │  │  └─ typing_extensions.cpython-312.pyc
   │     │        │  │  ├─ cachecontrol
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _cmd.cpython-312.pyc
   │     │        │  │  │  │  ├─ adapter.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ controller.cpython-312.pyc
   │     │        │  │  │  │  ├─ filewrapper.cpython-312.pyc
   │     │        │  │  │  │  ├─ heuristics.cpython-312.pyc
   │     │        │  │  │  │  ├─ serialize.cpython-312.pyc
   │     │        │  │  │  │  └─ wrapper.cpython-312.pyc
   │     │        │  │  │  ├─ _cmd.py
   │     │        │  │  │  ├─ adapter.py
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ caches
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ file_cache.cpython-312.pyc
   │     │        │  │  │  │  │  └─ redis_cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ file_cache.py
   │     │        │  │  │  │  └─ redis_cache.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ controller.py
   │     │        │  │  │  ├─ filewrapper.py
   │     │        │  │  │  ├─ heuristics.py
   │     │        │  │  │  ├─ serialize.py
   │     │        │  │  │  └─ wrapper.py
   │     │        │  │  ├─ certifi
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  └─ core.cpython-312.pyc
   │     │        │  │  │  ├─ cacert.pem
   │     │        │  │  │  └─ core.py
   │     │        │  │  ├─ chardet
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ big5freq.cpython-312.pyc
   │     │        │  │  │  │  ├─ big5prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ chardistribution.cpython-312.pyc
   │     │        │  │  │  │  ├─ charsetgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ charsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ codingstatemachine.cpython-312.pyc
   │     │        │  │  │  │  ├─ codingstatemachinedict.cpython-312.pyc
   │     │        │  │  │  │  ├─ cp949prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ enums.cpython-312.pyc
   │     │        │  │  │  │  ├─ escprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ escsm.cpython-312.pyc
   │     │        │  │  │  │  ├─ eucjpprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ euckrfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ euckrprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ euctwfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ euctwprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ gb2312freq.cpython-312.pyc
   │     │        │  │  │  │  ├─ gb2312prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ hebrewprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ jisfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ johabfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ johabprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ jpcntx.cpython-312.pyc
   │     │        │  │  │  │  ├─ langbulgarianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langgreekmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langhebrewmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langhungarianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langrussianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langthaimodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langturkishmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ latin1prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ macromanprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcharsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcsgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcssm.cpython-312.pyc
   │     │        │  │  │  │  ├─ resultdict.cpython-312.pyc
   │     │        │  │  │  │  ├─ sbcharsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ sbcsgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ sjisprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ universaldetector.cpython-312.pyc
   │     │        │  │  │  │  ├─ utf1632prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ utf8prober.cpython-312.pyc
   │     │        │  │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  │  ├─ big5freq.py
   │     │        │  │  │  ├─ big5prober.py
   │     │        │  │  │  ├─ chardistribution.py
   │     │        │  │  │  ├─ charsetgroupprober.py
   │     │        │  │  │  ├─ charsetprober.py
   │     │        │  │  │  ├─ cli
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ chardetect.cpython-312.pyc
   │     │        │  │  │  │  └─ chardetect.py
   │     │        │  │  │  ├─ codingstatemachine.py
   │     │        │  │  │  ├─ codingstatemachinedict.py
   │     │        │  │  │  ├─ cp949prober.py
   │     │        │  │  │  ├─ enums.py
   │     │        │  │  │  ├─ escprober.py
   │     │        │  │  │  ├─ escsm.py
   │     │        │  │  │  ├─ eucjpprober.py
   │     │        │  │  │  ├─ euckrfreq.py
   │     │        │  │  │  ├─ euckrprober.py
   │     │        │  │  │  ├─ euctwfreq.py
   │     │        │  │  │  ├─ euctwprober.py
   │     │        │  │  │  ├─ gb2312freq.py
   │     │        │  │  │  ├─ gb2312prober.py
   │     │        │  │  │  ├─ hebrewprober.py
   │     │        │  │  │  ├─ jisfreq.py
   │     │        │  │  │  ├─ johabfreq.py
   │     │        │  │  │  ├─ johabprober.py
   │     │        │  │  │  ├─ jpcntx.py
   │     │        │  │  │  ├─ langbulgarianmodel.py
   │     │        │  │  │  ├─ langgreekmodel.py
   │     │        │  │  │  ├─ langhebrewmodel.py
   │     │        │  │  │  ├─ langhungarianmodel.py
   │     │        │  │  │  ├─ langrussianmodel.py
   │     │        │  │  │  ├─ langthaimodel.py
   │     │        │  │  │  ├─ langturkishmodel.py
   │     │        │  │  │  ├─ latin1prober.py
   │     │        │  │  │  ├─ macromanprober.py
   │     │        │  │  │  ├─ mbcharsetprober.py
   │     │        │  │  │  ├─ mbcsgroupprober.py
   │     │        │  │  │  ├─ mbcssm.py
   │     │        │  │  │  ├─ metadata
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ languages.cpython-312.pyc
   │     │        │  │  │  │  └─ languages.py
   │     │        │  │  │  ├─ resultdict.py
   │     │        │  │  │  ├─ sbcharsetprober.py
   │     │        │  │  │  ├─ sbcsgroupprober.py
   │     │        │  │  │  ├─ sjisprober.py
   │     │        │  │  │  ├─ universaldetector.py
   │     │        │  │  │  ├─ utf1632prober.py
   │     │        │  │  │  ├─ utf8prober.py
   │     │        │  │  │  └─ version.py
   │     │        │  │  ├─ colorama
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansitowin32.cpython-312.pyc
   │     │        │  │  │  │  ├─ initialise.cpython-312.pyc
   │     │        │  │  │  │  ├─ win32.cpython-312.pyc
   │     │        │  │  │  │  └─ winterm.cpython-312.pyc
   │     │        │  │  │  ├─ ansi.py
   │     │        │  │  │  ├─ ansitowin32.py
   │     │        │  │  │  ├─ initialise.py
   │     │        │  │  │  ├─ tests
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ansi_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ansitowin32_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ initialise_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ isatty_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  │  └─ winterm_test.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi_test.py
   │     │        │  │  │  │  ├─ ansitowin32_test.py
   │     │        │  │  │  │  ├─ initialise_test.py
   │     │        │  │  │  │  ├─ isatty_test.py
   │     │        │  │  │  │  ├─ utils.py
   │     │        │  │  │  │  └─ winterm_test.py
   │     │        │  │  │  ├─ win32.py
   │     │        │  │  │  └─ winterm.py
   │     │        │  │  ├─ distlib
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ database.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ locators.cpython-312.pyc
   │     │        │  │  │  │  ├─ manifest.cpython-312.pyc
   │     │        │  │  │  │  ├─ markers.cpython-312.pyc
   │     │        │  │  │  │  ├─ metadata.cpython-312.pyc
   │     │        │  │  │  │  ├─ resources.cpython-312.pyc
   │     │        │  │  │  │  ├─ scripts.cpython-312.pyc
   │     │        │  │  │  │  ├─ util.cpython-312.pyc
   │     │        │  │  │  │  ├─ version.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ database.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ locators.py
   │     │        │  │  │  ├─ manifest.py
   │     │        │  │  │  ├─ markers.py
   │     │        │  │  │  ├─ metadata.py
   │     │        │  │  │  ├─ resources.py
   │     │        │  │  │  ├─ scripts.py
   │     │        │  │  │  ├─ t32.exe
   │     │        │  │  │  ├─ t64-arm.exe
   │     │        │  │  │  ├─ t64.exe
   │     │        │  │  │  ├─ util.py
   │     │        │  │  │  ├─ version.py
   │     │        │  │  │  ├─ w32.exe
   │     │        │  │  │  ├─ w64-arm.exe
   │     │        │  │  │  ├─ w64.exe
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ distro
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  └─ distro.cpython-312.pyc
   │     │        │  │  │  └─ distro.py
   │     │        │  │  ├─ idna
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ codec.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  │  ├─ idnadata.cpython-312.pyc
   │     │        │  │  │  │  ├─ intranges.cpython-312.pyc
   │     │        │  │  │  │  ├─ package_data.cpython-312.pyc
   │     │        │  │  │  │  └─ uts46data.cpython-312.pyc
   │     │        │  │  │  ├─ codec.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ core.py
   │     │        │  │  │  ├─ idnadata.py
   │     │        │  │  │  ├─ intranges.py
   │     │        │  │  │  ├─ package_data.py
   │     │        │  │  │  └─ uts46data.py
   │     │        │  │  ├─ msgpack
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ ext.cpython-312.pyc
   │     │        │  │  │  │  └─ fallback.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ ext.py
   │     │        │  │  │  └─ fallback.py
   │     │        │  │  ├─ packaging
   │     │        │  │  │  ├─ __about__.py
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __about__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _manylinux.cpython-312.pyc
   │     │        │  │  │  │  ├─ _musllinux.cpython-312.pyc
   │     │        │  │  │  │  ├─ _structures.cpython-312.pyc
   │     │        │  │  │  │  ├─ markers.cpython-312.pyc
   │     │        │  │  │  │  ├─ requirements.cpython-312.pyc
   │     │        │  │  │  │  ├─ specifiers.cpython-312.pyc
   │     │        │  │  │  │  ├─ tags.cpython-312.pyc
   │     │        │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  │  ├─ _manylinux.py
   │     │        │  │  │  ├─ _musllinux.py
   │     │        │  │  │  ├─ _structures.py
   │     │        │  │  │  ├─ markers.py
   │     │        │  │  │  ├─ requirements.py
   │     │        │  │  │  ├─ specifiers.py
   │     │        │  │  │  ├─ tags.py
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ version.py
   │     │        │  │  ├─ pkg_resources
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  └─ __pycache__
   │     │        │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  ├─ platformdirs
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ android.cpython-312.pyc
   │     │        │  │  │  │  ├─ api.cpython-312.pyc
   │     │        │  │  │  │  ├─ macos.cpython-312.pyc
   │     │        │  │  │  │  ├─ unix.cpython-312.pyc
   │     │        │  │  │  │  ├─ version.cpython-312.pyc
   │     │        │  │  │  │  └─ windows.cpython-312.pyc
   │     │        │  │  │  ├─ android.py
   │     │        │  │  │  ├─ api.py
   │     │        │  │  │  ├─ macos.py
   │     │        │  │  │  ├─ unix.py
   │     │        │  │  │  ├─ version.py
   │     │        │  │  │  └─ windows.py
   │     │        │  │  ├─ pygments
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ cmdline.cpython-312.pyc
   │     │        │  │  │  │  ├─ console.cpython-312.pyc
   │     │        │  │  │  │  ├─ filter.cpython-312.pyc
   │     │        │  │  │  │  ├─ formatter.cpython-312.pyc
   │     │        │  │  │  │  ├─ lexer.cpython-312.pyc
   │     │        │  │  │  │  ├─ modeline.cpython-312.pyc
   │     │        │  │  │  │  ├─ plugin.cpython-312.pyc
   │     │        │  │  │  │  ├─ regexopt.cpython-312.pyc
   │     │        │  │  │  │  ├─ scanner.cpython-312.pyc
   │     │        │  │  │  │  ├─ sphinxext.cpython-312.pyc
   │     │        │  │  │  │  ├─ style.cpython-312.pyc
   │     │        │  │  │  │  ├─ token.cpython-312.pyc
   │     │        │  │  │  │  ├─ unistring.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ cmdline.py
   │     │        │  │  │  ├─ console.py
   │     │        │  │  │  ├─ filter.py
   │     │        │  │  │  ├─ filters
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ formatter.py
   │     │        │  │  │  ├─ formatters
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _mapping.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ bbcode.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ groff.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ html.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ img.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ irc.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ latex.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ other.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ pangomarkup.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ rtf.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ svg.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ terminal.cpython-312.pyc
   │     │        │  │  │  │  │  └─ terminal256.cpython-312.pyc
   │     │        │  │  │  │  ├─ _mapping.py
   │     │        │  │  │  │  ├─ bbcode.py
   │     │        │  │  │  │  ├─ groff.py
   │     │        │  │  │  │  ├─ html.py
   │     │        │  │  │  │  ├─ img.py
   │     │        │  │  │  │  ├─ irc.py
   │     │        │  │  │  │  ├─ latex.py
   │     │        │  │  │  │  ├─ other.py
   │     │        │  │  │  │  ├─ pangomarkup.py
   │     │        │  │  │  │  ├─ rtf.py
   │     │        │  │  │  │  ├─ svg.py
   │     │        │  │  │  │  ├─ terminal.py
   │     │        │  │  │  │  └─ terminal256.py
   │     │        │  │  │  ├─ lexer.py
   │     │        │  │  │  ├─ lexers
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _mapping.cpython-312.pyc
   │     │        │  │  │  │  │  └─ python.cpython-312.pyc
   │     │        │  │  │  │  ├─ _mapping.py
   │     │        │  │  │  │  └─ python.py
   │     │        │  │  │  ├─ modeline.py
   │     │        │  │  │  ├─ plugin.py
   │     │        │  │  │  ├─ regexopt.py
   │     │        │  │  │  ├─ scanner.py
   │     │        │  │  │  ├─ sphinxext.py
   │     │        │  │  │  ├─ style.py
   │     │        │  │  │  ├─ styles
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ token.py
   │     │        │  │  │  ├─ unistring.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ pyparsing
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ actions.cpython-312.pyc
   │     │        │  │  │  │  ├─ common.cpython-312.pyc
   │     │        │  │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ helpers.cpython-312.pyc
   │     │        │  │  │  │  ├─ results.cpython-312.pyc
   │     │        │  │  │  │  ├─ testing.cpython-312.pyc
   │     │        │  │  │  │  ├─ unicode.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ actions.py
   │     │        │  │  │  ├─ common.py
   │     │        │  │  │  ├─ core.py
   │     │        │  │  │  ├─ diagram
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ helpers.py
   │     │        │  │  │  ├─ results.py
   │     │        │  │  │  ├─ testing.py
   │     │        │  │  │  ├─ unicode.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ pyproject_hooks
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  │  │  └─ _impl.cpython-312.pyc
   │     │        │  │  │  ├─ _compat.py
   │     │        │  │  │  ├─ _impl.py
   │     │        │  │  │  └─ _in_process
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  └─ _in_process.cpython-312.pyc
   │     │        │  │  │     └─ _in_process.py
   │     │        │  │  ├─ requests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _internal_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ adapters.cpython-312.pyc
   │     │        │  │  │  │  ├─ api.cpython-312.pyc
   │     │        │  │  │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  │  │  ├─ certs.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ cookies.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ help.cpython-312.pyc
   │     │        │  │  │  │  ├─ hooks.cpython-312.pyc
   │     │        │  │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  │  ├─ packages.cpython-312.pyc
   │     │        │  │  │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  │  │  ├─ status_codes.cpython-312.pyc
   │     │        │  │  │  │  ├─ structures.cpython-312.pyc
   │     │        │  │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ __version__.py
   │     │        │  │  │  ├─ _internal_utils.py
   │     │        │  │  │  ├─ adapters.py
   │     │        │  │  │  ├─ api.py
   │     │        │  │  │  ├─ auth.py
   │     │        │  │  │  ├─ certs.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ cookies.py
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ help.py
   │     │        │  │  │  ├─ hooks.py
   │     │        │  │  │  ├─ models.py
   │     │        │  │  │  ├─ packages.py
   │     │        │  │  │  ├─ sessions.py
   │     │        │  │  │  ├─ status_codes.py
   │     │        │  │  │  ├─ structures.py
   │     │        │  │  │  └─ utils.py
   │     │        │  │  ├─ resolvelib
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ providers.cpython-312.pyc
   │     │        │  │  │  │  ├─ reporters.cpython-312.pyc
   │     │        │  │  │  │  ├─ resolvers.cpython-312.pyc
   │     │        │  │  │  │  └─ structs.cpython-312.pyc
   │     │        │  │  │  ├─ compat
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ collections_abc.cpython-312.pyc
   │     │        │  │  │  │  └─ collections_abc.py
   │     │        │  │  │  ├─ providers.py
   │     │        │  │  │  ├─ reporters.py
   │     │        │  │  │  ├─ resolvers.py
   │     │        │  │  │  └─ structs.py
   │     │        │  │  ├─ rich
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _cell_widths.cpython-312.pyc
   │     │        │  │  │  │  ├─ _emoji_codes.cpython-312.pyc
   │     │        │  │  │  │  ├─ _emoji_replace.cpython-312.pyc
   │     │        │  │  │  │  ├─ _export_format.cpython-312.pyc
   │     │        │  │  │  │  ├─ _extension.cpython-312.pyc
   │     │        │  │  │  │  ├─ _fileno.cpython-312.pyc
   │     │        │  │  │  │  ├─ _inspect.cpython-312.pyc
   │     │        │  │  │  │  ├─ _log_render.cpython-312.pyc
   │     │        │  │  │  │  ├─ _loop.cpython-312.pyc
   │     │        │  │  │  │  ├─ _null_file.cpython-312.pyc
   │     │        │  │  │  │  ├─ _palettes.cpython-312.pyc
   │     │        │  │  │  │  ├─ _pick.cpython-312.pyc
   │     │        │  │  │  │  ├─ _ratio.cpython-312.pyc
   │     │        │  │  │  │  ├─ _spinners.cpython-312.pyc
   │     │        │  │  │  │  ├─ _stack.cpython-312.pyc
   │     │        │  │  │  │  ├─ _timer.cpython-312.pyc
   │     │        │  │  │  │  ├─ _win32_console.cpython-312.pyc
   │     │        │  │  │  │  ├─ _windows.cpython-312.pyc
   │     │        │  │  │  │  ├─ _windows_renderer.cpython-312.pyc
   │     │        │  │  │  │  ├─ _wrap.cpython-312.pyc
   │     │        │  │  │  │  ├─ abc.cpython-312.pyc
   │     │        │  │  │  │  ├─ align.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi.cpython-312.pyc
   │     │        │  │  │  │  ├─ bar.cpython-312.pyc
   │     │        │  │  │  │  ├─ box.cpython-312.pyc
   │     │        │  │  │  │  ├─ cells.cpython-312.pyc
   │     │        │  │  │  │  ├─ color.cpython-312.pyc
   │     │        │  │  │  │  ├─ color_triplet.cpython-312.pyc
   │     │        │  │  │  │  ├─ columns.cpython-312.pyc
   │     │        │  │  │  │  ├─ console.cpython-312.pyc
   │     │        │  │  │  │  ├─ constrain.cpython-312.pyc
   │     │        │  │  │  │  ├─ containers.cpython-312.pyc
   │     │        │  │  │  │  ├─ control.cpython-312.pyc
   │     │        │  │  │  │  ├─ default_styles.cpython-312.pyc
   │     │        │  │  │  │  ├─ diagnose.cpython-312.pyc
   │     │        │  │  │  │  ├─ emoji.cpython-312.pyc
   │     │        │  │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  │  ├─ file_proxy.cpython-312.pyc
   │     │        │  │  │  │  ├─ filesize.cpython-312.pyc
   │     │        │  │  │  │  ├─ highlighter.cpython-312.pyc
   │     │        │  │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  │  ├─ jupyter.cpython-312.pyc
   │     │        │  │  │  │  ├─ layout.cpython-312.pyc
   │     │        │  │  │  │  ├─ live.cpython-312.pyc
   │     │        │  │  │  │  ├─ live_render.cpython-312.pyc
   │     │        │  │  │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  │  │  ├─ markup.cpython-312.pyc
   │     │        │  │  │  │  ├─ measure.cpython-312.pyc
   │     │        │  │  │  │  ├─ padding.cpython-312.pyc
   │     │        │  │  │  │  ├─ pager.cpython-312.pyc
   │     │        │  │  │  │  ├─ palette.cpython-312.pyc
   │     │        │  │  │  │  ├─ panel.cpython-312.pyc
   │     │        │  │  │  │  ├─ pretty.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress_bar.cpython-312.pyc
   │     │        │  │  │  │  ├─ prompt.cpython-312.pyc
   │     │        │  │  │  │  ├─ protocol.cpython-312.pyc
   │     │        │  │  │  │  ├─ region.cpython-312.pyc
   │     │        │  │  │  │  ├─ repr.cpython-312.pyc
   │     │        │  │  │  │  ├─ rule.cpython-312.pyc
   │     │        │  │  │  │  ├─ scope.cpython-312.pyc
   │     │        │  │  │  │  ├─ screen.cpython-312.pyc
   │     │        │  │  │  │  ├─ segment.cpython-312.pyc
   │     │        │  │  │  │  ├─ spinner.cpython-312.pyc
   │     │        │  │  │  │  ├─ status.cpython-312.pyc
   │     │        │  │  │  │  ├─ style.cpython-312.pyc
   │     │        │  │  │  │  ├─ styled.cpython-312.pyc
   │     │        │  │  │  │  ├─ syntax.cpython-312.pyc
   │     │        │  │  │  │  ├─ table.cpython-312.pyc
   │     │        │  │  │  │  ├─ terminal_theme.cpython-312.pyc
   │     │        │  │  │  │  ├─ text.cpython-312.pyc
   │     │        │  │  │  │  ├─ theme.cpython-312.pyc
   │     │        │  │  │  │  ├─ themes.cpython-312.pyc
   │     │        │  │  │  │  ├─ traceback.cpython-312.pyc
   │     │        │  │  │  │  └─ tree.cpython-312.pyc
   │     │        │  │  │  ├─ _cell_widths.py
   │     │        │  │  │  ├─ _emoji_codes.py
   │     │        │  │  │  ├─ _emoji_replace.py
   │     │        │  │  │  ├─ _export_format.py
   │     │        │  │  │  ├─ _extension.py
   │     │        │  │  │  ├─ _fileno.py
   │     │        │  │  │  ├─ _inspect.py
   │     │        │  │  │  ├─ _log_render.py
   │     │        │  │  │  ├─ _loop.py
   │     │        │  │  │  ├─ _null_file.py
   │     │        │  │  │  ├─ _palettes.py
   │     │        │  │  │  ├─ _pick.py
   │     │        │  │  │  ├─ _ratio.py
   │     │        │  │  │  ├─ _spinners.py
   │     │        │  │  │  ├─ _stack.py
   │     │        │  │  │  ├─ _timer.py
   │     │        │  │  │  ├─ _win32_console.py
   │     │        │  │  │  ├─ _windows.py
   │     │        │  │  │  ├─ _windows_renderer.py
   │     │        │  │  │  ├─ _wrap.py
   │     │        │  │  │  ├─ abc.py
   │     │        │  │  │  ├─ align.py
   │     │        │  │  │  ├─ ansi.py
   │     │        │  │  │  ├─ bar.py
   │     │        │  │  │  ├─ box.py
   │     │        │  │  │  ├─ cells.py
   │     │        │  │  │  ├─ color.py
   │     │        │  │  │  ├─ color_triplet.py
   │     │        │  │  │  ├─ columns.py
   │     │        │  │  │  ├─ console.py
   │     │        │  │  │  ├─ constrain.py
   │     │        │  │  │  ├─ containers.py
   │     │        │  │  │  ├─ control.py
   │     │        │  │  │  ├─ default_styles.py
   │     │        │  │  │  ├─ diagnose.py
   │     │        │  │  │  ├─ emoji.py
   │     │        │  │  │  ├─ errors.py
   │     │        │  │  │  ├─ file_proxy.py
   │     │        │  │  │  ├─ filesize.py
   │     │        │  │  │  ├─ highlighter.py
   │     │        │  │  │  ├─ json.py
   │     │        │  │  │  ├─ jupyter.py
   │     │        │  │  │  ├─ layout.py
   │     │        │  │  │  ├─ live.py
   │     │        │  │  │  ├─ live_render.py
   │     │        │  │  │  ├─ logging.py
   │     │        │  │  │  ├─ markup.py
   │     │        │  │  │  ├─ measure.py
   │     │        │  │  │  ├─ padding.py
   │     │        │  │  │  ├─ pager.py
   │     │        │  │  │  ├─ palette.py
   │     │        │  │  │  ├─ panel.py
   │     │        │  │  │  ├─ pretty.py
   │     │        │  │  │  ├─ progress.py
   │     │        │  │  │  ├─ progress_bar.py
   │     │        │  │  │  ├─ prompt.py
   │     │        │  │  │  ├─ protocol.py
   │     │        │  │  │  ├─ region.py
   │     │        │  │  │  ├─ repr.py
   │     │        │  │  │  ├─ rule.py
   │     │        │  │  │  ├─ scope.py
   │     │        │  │  │  ├─ screen.py
   │     │        │  │  │  ├─ segment.py
   │     │        │  │  │  ├─ spinner.py
   │     │        │  │  │  ├─ status.py
   │     │        │  │  │  ├─ style.py
   │     │        │  │  │  ├─ styled.py
   │     │        │  │  │  ├─ syntax.py
   │     │        │  │  │  ├─ table.py
   │     │        │  │  │  ├─ terminal_theme.py
   │     │        │  │  │  ├─ text.py
   │     │        │  │  │  ├─ theme.py
   │     │        │  │  │  ├─ themes.py
   │     │        │  │  │  ├─ traceback.py
   │     │        │  │  │  └─ tree.py
   │     │        │  │  ├─ six.py
   │     │        │  │  ├─ tenacity
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _asyncio.cpython-312.pyc
   │     │        │  │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ after.cpython-312.pyc
   │     │        │  │  │  │  ├─ before.cpython-312.pyc
   │     │        │  │  │  │  ├─ before_sleep.cpython-312.pyc
   │     │        │  │  │  │  ├─ nap.cpython-312.pyc
   │     │        │  │  │  │  ├─ retry.cpython-312.pyc
   │     │        │  │  │  │  ├─ stop.cpython-312.pyc
   │     │        │  │  │  │  ├─ tornadoweb.cpython-312.pyc
   │     │        │  │  │  │  └─ wait.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio.py
   │     │        │  │  │  ├─ _utils.py
   │     │        │  │  │  ├─ after.py
   │     │        │  │  │  ├─ before.py
   │     │        │  │  │  ├─ before_sleep.py
   │     │        │  │  │  ├─ nap.py
   │     │        │  │  │  ├─ retry.py
   │     │        │  │  │  ├─ stop.py
   │     │        │  │  │  ├─ tornadoweb.py
   │     │        │  │  │  └─ wait.py
   │     │        │  │  ├─ tomli
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ _re.cpython-312.pyc
   │     │        │  │  │  │  └─ _types.cpython-312.pyc
   │     │        │  │  │  ├─ _parser.py
   │     │        │  │  │  ├─ _re.py
   │     │        │  │  │  └─ _types.py
   │     │        │  │  ├─ typing_extensions.py
   │     │        │  │  ├─ urllib3
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _collections.cpython-312.pyc
   │     │        │  │  │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  │  ├─ connectionpool.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  │  │  ├─ filepost.cpython-312.pyc
   │     │        │  │  │  │  ├─ poolmanager.cpython-312.pyc
   │     │        │  │  │  │  ├─ request.cpython-312.pyc
   │     │        │  │  │  │  └─ response.cpython-312.pyc
   │     │        │  │  │  ├─ _collections.py
   │     │        │  │  │  ├─ _version.py
   │     │        │  │  │  ├─ connection.py
   │     │        │  │  │  ├─ connectionpool.py
   │     │        │  │  │  ├─ contrib
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _appengine_environ.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ appengine.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ntlmpool.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ pyopenssl.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ securetransport.cpython-312.pyc
   │     │        │  │  │  │  │  └─ socks.cpython-312.pyc
   │     │        │  │  │  │  ├─ _appengine_environ.py
   │     │        │  │  │  │  ├─ _securetransport
   │     │        │  │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  │  ├─ bindings.cpython-312.pyc
   │     │        │  │  │  │  │  │  └─ low_level.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ bindings.py
   │     │        │  │  │  │  │  └─ low_level.py
   │     │        │  │  │  │  ├─ appengine.py
   │     │        │  │  │  │  ├─ ntlmpool.py
   │     │        │  │  │  │  ├─ pyopenssl.py
   │     │        │  │  │  │  ├─ securetransport.py
   │     │        │  │  │  │  └─ socks.py
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ fields.py
   │     │        │  │  │  ├─ filepost.py
   │     │        │  │  │  ├─ packages
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ six.cpython-312.pyc
   │     │        │  │  │  │  ├─ backports
   │     │        │  │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  │  ├─ makefile.cpython-312.pyc
   │     │        │  │  │  │  │  │  └─ weakref_finalize.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ makefile.py
   │     │        │  │  │  │  │  └─ weakref_finalize.py
   │     │        │  │  │  │  └─ six.py
   │     │        │  │  │  ├─ poolmanager.py
   │     │        │  │  │  ├─ request.py
   │     │        │  │  │  ├─ response.py
   │     │        │  │  │  └─ util
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  ├─ connection.cpython-312.pyc
   │     │        │  │  │     │  ├─ proxy.cpython-312.pyc
   │     │        │  │  │     │  ├─ queue.cpython-312.pyc
   │     │        │  │  │     │  ├─ request.cpython-312.pyc
   │     │        │  │  │     │  ├─ response.cpython-312.pyc
   │     │        │  │  │     │  ├─ retry.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssl_.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssl_match_hostname.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssltransport.cpython-312.pyc
   │     │        │  │  │     │  ├─ timeout.cpython-312.pyc
   │     │        │  │  │     │  ├─ url.cpython-312.pyc
   │     │        │  │  │     │  └─ wait.cpython-312.pyc
   │     │        │  │  │     ├─ connection.py
   │     │        │  │  │     ├─ proxy.py
   │     │        │  │  │     ├─ queue.py
   │     │        │  │  │     ├─ request.py
   │     │        │  │  │     ├─ response.py
   │     │        │  │  │     ├─ retry.py
   │     │        │  │  │     ├─ ssl_.py
   │     │        │  │  │     ├─ ssl_match_hostname.py
   │     │        │  │  │     ├─ ssltransport.py
   │     │        │  │  │     ├─ timeout.py
   │     │        │  │  │     ├─ url.py
   │     │        │  │  │     └─ wait.py
   │     │        │  │  ├─ vendor.txt
   │     │        │  │  └─ webencodings
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ labels.cpython-312.pyc
   │     │        │  │     │  ├─ mklabels.cpython-312.pyc
   │     │        │  │     │  ├─ tests.cpython-312.pyc
   │     │        │  │     │  └─ x_user_defined.cpython-312.pyc
   │     │        │  │     ├─ labels.py
   │     │        │  │     ├─ mklabels.py
   │     │        │  │     ├─ tests.py
   │     │        │  │     └─ x_user_defined.py
   │     │        │  └─ py.typed
   │     │        ├─ pip-23.2.1.dist-info
   │     │        │  ├─ AUTHORS.txt
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ LICENSE.txt
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ top_level.txt
   │     │        ├─ pydantic
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _migration.cpython-312.pyc
   │     │        │  │  ├─ alias_generators.cpython-312.pyc
   │     │        │  │  ├─ aliases.cpython-312.pyc
   │     │        │  │  ├─ annotated_handlers.cpython-312.pyc
   │     │        │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  ├─ color.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ dataclasses.cpython-312.pyc
   │     │        │  │  ├─ datetime_parse.cpython-312.pyc
   │     │        │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  ├─ env_settings.cpython-312.pyc
   │     │        │  │  ├─ error_wrappers.cpython-312.pyc
   │     │        │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ functional_serializers.cpython-312.pyc
   │     │        │  │  ├─ functional_validators.cpython-312.pyc
   │     │        │  │  ├─ generics.cpython-312.pyc
   │     │        │  │  ├─ json.cpython-312.pyc
   │     │        │  │  ├─ json_schema.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ mypy.cpython-312.pyc
   │     │        │  │  ├─ networks.cpython-312.pyc
   │     │        │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  ├─ root_model.cpython-312.pyc
   │     │        │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  ├─ tools.cpython-312.pyc
   │     │        │  │  ├─ type_adapter.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ typing.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  ├─ validate_call_decorator.cpython-312.pyc
   │     │        │  │  ├─ validators.cpython-312.pyc
   │     │        │  │  ├─ version.cpython-312.pyc
   │     │        │  │  └─ warnings.cpython-312.pyc
   │     │        │  ├─ _internal
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _config.cpython-312.pyc
   │     │        │  │  │  ├─ _core_metadata.cpython-312.pyc
   │     │        │  │  │  ├─ _core_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _dataclasses.cpython-312.pyc
   │     │        │  │  │  ├─ _decorators.cpython-312.pyc
   │     │        │  │  │  ├─ _decorators_v1.cpython-312.pyc
   │     │        │  │  │  ├─ _discriminated_union.cpython-312.pyc
   │     │        │  │  │  ├─ _docs_extraction.cpython-312.pyc
   │     │        │  │  │  ├─ _fields.cpython-312.pyc
   │     │        │  │  │  ├─ _forward_ref.cpython-312.pyc
   │     │        │  │  │  ├─ _generate_schema.cpython-312.pyc
   │     │        │  │  │  ├─ _generics.cpython-312.pyc
   │     │        │  │  │  ├─ _git.cpython-312.pyc
   │     │        │  │  │  ├─ _import_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _internal_dataclass.cpython-312.pyc
   │     │        │  │  │  ├─ _known_annotated_metadata.cpython-312.pyc
   │     │        │  │  │  ├─ _mock_val_ser.cpython-312.pyc
   │     │        │  │  │  ├─ _model_construction.cpython-312.pyc
   │     │        │  │  │  ├─ _namespace_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _repr.cpython-312.pyc
   │     │        │  │  │  ├─ _schema_gather.cpython-312.pyc
   │     │        │  │  │  ├─ _schema_generation_shared.cpython-312.pyc
   │     │        │  │  │  ├─ _serializers.cpython-312.pyc
   │     │        │  │  │  ├─ _signature.cpython-312.pyc
   │     │        │  │  │  ├─ _typing_extra.cpython-312.pyc
   │     │        │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  ├─ _validate_call.cpython-312.pyc
   │     │        │  │  │  └─ _validators.cpython-312.pyc
   │     │        │  │  ├─ _config.py
   │     │        │  │  ├─ _core_metadata.py
   │     │        │  │  ├─ _core_utils.py
   │     │        │  │  ├─ _dataclasses.py
   │     │        │  │  ├─ _decorators.py
   │     │        │  │  ├─ _decorators_v1.py
   │     │        │  │  ├─ _discriminated_union.py
   │     │        │  │  ├─ _docs_extraction.py
   │     │        │  │  ├─ _fields.py
   │     │        │  │  ├─ _forward_ref.py
   │     │        │  │  ├─ _generate_schema.py
   │     │        │  │  ├─ _generics.py
   │     │        │  │  ├─ _git.py
   │     │        │  │  ├─ _import_utils.py
   │     │        │  │  ├─ _internal_dataclass.py
   │     │        │  │  ├─ _known_annotated_metadata.py
   │     │        │  │  ├─ _mock_val_ser.py
   │     │        │  │  ├─ _model_construction.py
   │     │        │  │  ├─ _namespace_utils.py
   │     │        │  │  ├─ _repr.py
   │     │        │  │  ├─ _schema_gather.py
   │     │        │  │  ├─ _schema_generation_shared.py
   │     │        │  │  ├─ _serializers.py
   │     │        │  │  ├─ _signature.py
   │     │        │  │  ├─ _typing_extra.py
   │     │        │  │  ├─ _utils.py
   │     │        │  │  ├─ _validate_call.py
   │     │        │  │  └─ _validators.py
   │     │        │  ├─ _migration.py
   │     │        │  ├─ alias_generators.py
   │     │        │  ├─ aliases.py
   │     │        │  ├─ annotated_handlers.py
   │     │        │  ├─ class_validators.py
   │     │        │  ├─ color.py
   │     │        │  ├─ config.py
   │     │        │  ├─ dataclasses.py
   │     │        │  ├─ datetime_parse.py
   │     │        │  ├─ decorator.py
   │     │        │  ├─ deprecated
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  │  ├─ config.cpython-312.pyc
   │     │        │  │  │  ├─ copy_internals.cpython-312.pyc
   │     │        │  │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  │  └─ tools.cpython-312.pyc
   │     │        │  │  ├─ class_validators.py
   │     │        │  │  ├─ config.py
   │     │        │  │  ├─ copy_internals.py
   │     │        │  │  ├─ decorator.py
   │     │        │  │  ├─ json.py
   │     │        │  │  ├─ parse.py
   │     │        │  │  └─ tools.py
   │     │        │  ├─ env_settings.py
   │     │        │  ├─ error_wrappers.py
   │     │        │  ├─ errors.py
   │     │        │  ├─ experimental
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ arguments_schema.cpython-312.pyc
   │     │        │  │  │  ├─ missing_sentinel.cpython-312.pyc
   │     │        │  │  │  └─ pipeline.cpython-312.pyc
   │     │        │  │  ├─ arguments_schema.py
   │     │        │  │  ├─ missing_sentinel.py
   │     │        │  │  └─ pipeline.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ functional_serializers.py
   │     │        │  ├─ functional_validators.py
   │     │        │  ├─ generics.py
   │     │        │  ├─ json.py
   │     │        │  ├─ json_schema.py
   │     │        │  ├─ main.py
   │     │        │  ├─ mypy.py
   │     │        │  ├─ networks.py
   │     │        │  ├─ parse.py
   │     │        │  ├─ plugin
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _loader.cpython-312.pyc
   │     │        │  │  │  └─ _schema_validator.cpython-312.pyc
   │     │        │  │  ├─ _loader.py
   │     │        │  │  └─ _schema_validator.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ root_model.py
   │     │        │  ├─ schema.py
   │     │        │  ├─ tools.py
   │     │        │  ├─ type_adapter.py
   │     │        │  ├─ types.py
   │     │        │  ├─ typing.py
   │     │        │  ├─ utils.py
   │     │        │  ├─ v1
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _hypothesis_plugin.cpython-312.pyc
   │     │        │  │  │  ├─ annotated_types.cpython-312.pyc
   │     │        │  │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  │  ├─ color.cpython-312.pyc
   │     │        │  │  │  ├─ config.cpython-312.pyc
   │     │        │  │  │  ├─ dataclasses.cpython-312.pyc
   │     │        │  │  │  ├─ datetime_parse.cpython-312.pyc
   │     │        │  │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  │  ├─ env_settings.cpython-312.pyc
   │     │        │  │  │  ├─ error_wrappers.cpython-312.pyc
   │     │        │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  │  ├─ generics.cpython-312.pyc
   │     │        │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  ├─ mypy.cpython-312.pyc
   │     │        │  │  │  ├─ networks.cpython-312.pyc
   │     │        │  │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  │  ├─ tools.cpython-312.pyc
   │     │        │  │  │  ├─ types.cpython-312.pyc
   │     │        │  │  │  ├─ typing.cpython-312.pyc
   │     │        │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ validators.cpython-312.pyc
   │     │        │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  ├─ _hypothesis_plugin.py
   │     │        │  │  ├─ annotated_types.py
   │     │        │  │  ├─ class_validators.py
   │     │        │  │  ├─ color.py
   │     │        │  │  ├─ config.py
   │     │        │  │  ├─ dataclasses.py
   │     │        │  │  ├─ datetime_parse.py
   │     │        │  │  ├─ decorator.py
   │     │        │  │  ├─ env_settings.py
   │     │        │  │  ├─ error_wrappers.py
   │     │        │  │  ├─ errors.py
   │     │        │  │  ├─ fields.py
   │     │        │  │  ├─ generics.py
   │     │        │  │  ├─ json.py
   │     │        │  │  ├─ main.py
   │     │        │  │  ├─ mypy.py
   │     │        │  │  ├─ networks.py
   │     │        │  │  ├─ parse.py
   │     │        │  │  ├─ py.typed
   │     │        │  │  ├─ schema.py
   │     │        │  │  ├─ tools.py
   │     │        │  │  ├─ types.py
   │     │        │  │  ├─ typing.py
   │     │        │  │  ├─ utils.py
   │     │        │  │  ├─ validators.py
   │     │        │  │  └─ version.py
   │     │        │  ├─ validate_call_decorator.py
   │     │        │  ├─ validators.py
   │     │        │  ├─ version.py
   │     │        │  └─ warnings.py
   │     │        ├─ pydantic-2.13.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ pydantic_core
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ core_schema.cpython-312.pyc
   │     │        │  ├─ _pydantic_core.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ _pydantic_core.pyi
   │     │        │  ├─ core_schema.py
   │     │        │  └─ py.typed
   │     │        ├─ pydantic_core-2.46.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ sboms
   │     │        │     └─ pydantic-core.cyclonedx.json
   │     │        ├─ python_dotenv-1.2.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ requests
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  ├─ _internal_utils.cpython-312.pyc
   │     │        │  │  ├─ _types.cpython-312.pyc
   │     │        │  │  ├─ adapters.cpython-312.pyc
   │     │        │  │  ├─ api.cpython-312.pyc
   │     │        │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  ├─ certs.cpython-312.pyc
   │     │        │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  ├─ cookies.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ help.cpython-312.pyc
   │     │        │  │  ├─ hooks.cpython-312.pyc
   │     │        │  │  ├─ models.cpython-312.pyc
   │     │        │  │  ├─ packages.cpython-312.pyc
   │     │        │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  ├─ status_codes.cpython-312.pyc
   │     │        │  │  ├─ structures.cpython-312.pyc
   │     │        │  │  └─ utils.cpython-312.pyc
   │     │        │  ├─ __version__.py
   │     │        │  ├─ _internal_utils.py
   │     │        │  ├─ _types.py
   │     │        │  ├─ adapters.py
   │     │        │  ├─ api.py
   │     │        │  ├─ auth.py
   │     │        │  ├─ certs.py
   │     │        │  ├─ compat.py
   │     │        │  ├─ cookies.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ help.py
   │     │        │  ├─ hooks.py
   │     │        │  ├─ models.py
   │     │        │  ├─ packages.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ sessions.py
   │     │        │  ├─ status_codes.py
   │     │        │  ├─ structures.py
   │     │        │  └─ utils.py
   │     │        ├─ requests-2.34.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  ├─ LICENSE
   │     │        │  │  └─ NOTICE
   │     │        │  └─ top_level.txt
   │     │        ├─ starlette
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _exception_handler.cpython-312.pyc
   │     │        │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  ├─ applications.cpython-312.pyc
   │     │        │  │  ├─ authentication.cpython-312.pyc
   │     │        │  │  ├─ background.cpython-312.pyc
   │     │        │  │  ├─ concurrency.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ convertors.cpython-312.pyc
   │     │        │  │  ├─ datastructures.cpython-312.pyc
   │     │        │  │  ├─ endpoints.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ formparsers.cpython-312.pyc
   │     │        │  │  ├─ requests.cpython-312.pyc
   │     │        │  │  ├─ responses.cpython-312.pyc
   │     │        │  │  ├─ routing.cpython-312.pyc
   │     │        │  │  ├─ schemas.cpython-312.pyc
   │     │        │  │  ├─ staticfiles.cpython-312.pyc
   │     │        │  │  ├─ status.cpython-312.pyc
   │     │        │  │  ├─ templating.cpython-312.pyc
   │     │        │  │  ├─ testclient.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  └─ websockets.cpython-312.pyc
   │     │        │  ├─ _exception_handler.py
   │     │        │  ├─ _utils.py
   │     │        │  ├─ applications.py
   │     │        │  ├─ authentication.py
   │     │        │  ├─ background.py
   │     │        │  ├─ concurrency.py
   │     │        │  ├─ config.py
   │     │        │  ├─ convertors.py
   │     │        │  ├─ datastructures.py
   │     │        │  ├─ endpoints.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ formparsers.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ authentication.cpython-312.pyc
   │     │        │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  ├─ cors.cpython-312.pyc
   │     │        │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ gzip.cpython-312.pyc
   │     │        │  │  │  ├─ httpsredirect.cpython-312.pyc
   │     │        │  │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  │  ├─ trustedhost.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ authentication.py
   │     │        │  │  ├─ base.py
   │     │        │  │  ├─ cors.py
   │     │        │  │  ├─ errors.py
   │     │        │  │  ├─ exceptions.py
   │     │        │  │  ├─ gzip.py
   │     │        │  │  ├─ httpsredirect.py
   │     │        │  │  ├─ sessions.py
   │     │        │  │  ├─ trustedhost.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ requests.py
   │     │        │  ├─ responses.py
   │     │        │  ├─ routing.py
   │     │        │  ├─ schemas.py
   │     │        │  ├─ staticfiles.py
   │     │        │  ├─ status.py
   │     │        │  ├─ templating.py
   │     │        │  ├─ testclient.py
   │     │        │  ├─ types.py
   │     │        │  └─ websockets.py
   │     │        ├─ starlette-1.1.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.md
   │     │        ├─ typing_extensions-4.15.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ typing_extensions.py
   │     │        ├─ typing_inspection
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ introspection.cpython-312.pyc
   │     │        │  │  └─ typing_objects.cpython-312.pyc
   │     │        │  ├─ introspection.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ typing_objects.py
   │     │        │  └─ typing_objects.pyi
   │     │        ├─ typing_inspection-0.4.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ urllib3
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _base_connection.cpython-312.pyc
   │     │        │  │  ├─ _collections.cpython-312.pyc
   │     │        │  │  ├─ _request_methods.cpython-312.pyc
   │     │        │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  ├─ connectionpool.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ filepost.cpython-312.pyc
   │     │        │  │  ├─ poolmanager.cpython-312.pyc
   │     │        │  │  └─ response.cpython-312.pyc
   │     │        │  ├─ _base_connection.py
   │     │        │  ├─ _collections.py
   │     │        │  ├─ _request_methods.py
   │     │        │  ├─ _version.py
   │     │        │  ├─ connection.py
   │     │        │  ├─ connectionpool.py
   │     │        │  ├─ contrib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ pyopenssl.cpython-312.pyc
   │     │        │  │  │  └─ socks.cpython-312.pyc
   │     │        │  │  ├─ emscripten
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  │  ├─ fetch.cpython-312.pyc
   │     │        │  │  │  │  ├─ request.cpython-312.pyc
   │     │        │  │  │  │  └─ response.cpython-312.pyc
   │     │        │  │  │  ├─ connection.py
   │     │        │  │  │  ├─ emscripten_fetch_worker.js
   │     │        │  │  │  ├─ fetch.py
   │     │        │  │  │  ├─ request.py
   │     │        │  │  │  └─ response.py
   │     │        │  │  ├─ pyopenssl.py
   │     │        │  │  └─ socks.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ filepost.py
   │     │        │  ├─ http2
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  └─ probe.cpython-312.pyc
   │     │        │  │  ├─ connection.py
   │     │        │  │  └─ probe.py
   │     │        │  ├─ poolmanager.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ response.py
   │     │        │  └─ util
   │     │        │     ├─ __init__.py
   │     │        │     ├─ __pycache__
   │     │        │     │  ├─ __init__.cpython-312.pyc
   │     │        │     │  ├─ connection.cpython-312.pyc
   │     │        │     │  ├─ proxy.cpython-312.pyc
   │     │        │     │  ├─ request.cpython-312.pyc
   │     │        │     │  ├─ response.cpython-312.pyc
   │     │        │     │  ├─ retry.cpython-312.pyc
   │     │        │     │  ├─ ssl_.cpython-312.pyc
   │     │        │     │  ├─ ssl_match_hostname.cpython-312.pyc
   │     │        │     │  ├─ ssltransport.cpython-312.pyc
   │     │        │     │  ├─ timeout.cpython-312.pyc
   │     │        │     │  ├─ url.cpython-312.pyc
   │     │        │     │  ├─ util.cpython-312.pyc
   │     │        │     │  └─ wait.cpython-312.pyc
   │     │        │     ├─ connection.py
   │     │        │     ├─ proxy.py
   │     │        │     ├─ request.py
   │     │        │     ├─ response.py
   │     │        │     ├─ retry.py
   │     │        │     ├─ ssl_.py
   │     │        │     ├─ ssl_match_hostname.py
   │     │        │     ├─ ssltransport.py
   │     │        │     ├─ timeout.py
   │     │        │     ├─ url.py
   │     │        │     ├─ util.py
   │     │        │     └─ wait.py
   │     │        ├─ urllib3-2.7.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.txt
   │     │        ├─ uvicorn
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  ├─ _subprocess.cpython-312.pyc
   │     │        │  │  ├─ _types.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ importer.cpython-312.pyc
   │     │        │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ server.cpython-312.pyc
   │     │        │  │  └─ workers.cpython-312.pyc
   │     │        │  ├─ _compat.py
   │     │        │  ├─ _subprocess.py
   │     │        │  ├─ _types.py
   │     │        │  ├─ config.py
   │     │        │  ├─ importer.py
   │     │        │  ├─ lifespan
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ off.cpython-312.pyc
   │     │        │  │  │  └─ on.cpython-312.pyc
   │     │        │  │  ├─ off.py
   │     │        │  │  └─ on.py
   │     │        │  ├─ logging.py
   │     │        │  ├─ loops
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asyncio.cpython-312.pyc
   │     │        │  │  │  ├─ auto.cpython-312.pyc
   │     │        │  │  │  └─ uvloop.cpython-312.pyc
   │     │        │  │  ├─ asyncio.py
   │     │        │  │  ├─ auto.py
   │     │        │  │  └─ uvloop.py
   │     │        │  ├─ main.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asgi2.cpython-312.pyc
   │     │        │  │  │  ├─ message_logger.cpython-312.pyc
   │     │        │  │  │  ├─ proxy_headers.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ asgi2.py
   │     │        │  │  ├─ message_logger.py
   │     │        │  │  ├─ proxy_headers.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ protocols
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ http
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ auto.cpython-312.pyc
   │     │        │  │  │  │  ├─ flow_control.cpython-312.pyc
   │     │        │  │  │  │  ├─ h11_impl.cpython-312.pyc
   │     │        │  │  │  │  └─ httptools_impl.cpython-312.pyc
   │     │        │  │  │  ├─ auto.py
   │     │        │  │  │  ├─ flow_control.py
   │     │        │  │  │  ├─ h11_impl.py
   │     │        │  │  │  └─ httptools_impl.py
   │     │        │  │  ├─ utils.py
   │     │        │  │  └─ websockets
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ auto.cpython-312.pyc
   │     │        │  │     │  ├─ websockets_impl.cpython-312.pyc
   │     │        │  │     │  ├─ websockets_sansio_impl.cpython-312.pyc
   │     │        │  │     │  └─ wsproto_impl.cpython-312.pyc
   │     │        │  │     ├─ auto.py
   │     │        │  │     ├─ websockets_impl.py
   │     │        │  │     ├─ websockets_sansio_impl.py
   │     │        │  │     └─ wsproto_impl.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ server.py
   │     │        │  ├─ supervisors
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ basereload.cpython-312.pyc
   │     │        │  │  │  ├─ multiprocess.cpython-312.pyc
   │     │        │  │  │  ├─ statreload.cpython-312.pyc
   │     │        │  │  │  └─ watchfilesreload.cpython-312.pyc
   │     │        │  │  ├─ basereload.py
   │     │        │  │  ├─ multiprocess.py
   │     │        │  │  ├─ statreload.py
   │     │        │  │  └─ watchfilesreload.py
   │     │        │  └─ workers.py
   │     │        └─ uvicorn-0.48.0.dist-info
   │     │           ├─ INSTALLER
   │     │           ├─ METADATA
   │     │           ├─ RECORD
   │     │           ├─ REQUESTED
   │     │           ├─ WHEEL
   │     │           ├─ entry_points.txt
   │     │           └─ licenses
   │     │              └─ LICENSE.md
   │     ├─ lib64
   │     │  └─ python3.12
   │     │     └─ site-packages
   │     │        ├─ 81d243bd2c585b0f4821__mypyc.cpython-312-x86_64-linux-gnu.so
   │     │        ├─ __pycache__
   │     │        │  └─ typing_extensions.cpython-312.pyc
   │     │        ├─ annotated_doc
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ main.cpython-312.pyc
   │     │        │  ├─ main.py
   │     │        │  └─ py.typed
   │     │        ├─ annotated_doc-0.0.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ annotated_types
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ test_cases.cpython-312.pyc
   │     │        │  ├─ py.typed
   │     │        │  └─ test_cases.py
   │     │        ├─ annotated_types-0.7.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ anyio
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ from_thread.cpython-312.pyc
   │     │        │  │  ├─ functools.cpython-312.pyc
   │     │        │  │  ├─ lowlevel.cpython-312.pyc
   │     │        │  │  ├─ pytest_plugin.cpython-312.pyc
   │     │        │  │  ├─ to_interpreter.cpython-312.pyc
   │     │        │  │  ├─ to_process.cpython-312.pyc
   │     │        │  │  └─ to_thread.cpython-312.pyc
   │     │        │  ├─ _backends
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio.cpython-312.pyc
   │     │        │  │  │  └─ _trio.cpython-312.pyc
   │     │        │  │  ├─ _asyncio.py
   │     │        │  │  └─ _trio.py
   │     │        │  ├─ _core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio_selector_thread.cpython-312.pyc
   │     │        │  │  │  ├─ _contextmanagers.cpython-312.pyc
   │     │        │  │  │  ├─ _eventloop.cpython-312.pyc
   │     │        │  │  │  ├─ _exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ _fileio.cpython-312.pyc
   │     │        │  │  │  ├─ _resources.cpython-312.pyc
   │     │        │  │  │  ├─ _signals.cpython-312.pyc
   │     │        │  │  │  ├─ _sockets.cpython-312.pyc
   │     │        │  │  │  ├─ _streams.cpython-312.pyc
   │     │        │  │  │  ├─ _subprocesses.cpython-312.pyc
   │     │        │  │  │  ├─ _synchronization.cpython-312.pyc
   │     │        │  │  │  ├─ _tasks.cpython-312.pyc
   │     │        │  │  │  ├─ _tempfile.cpython-312.pyc
   │     │        │  │  │  ├─ _testing.cpython-312.pyc
   │     │        │  │  │  └─ _typedattr.cpython-312.pyc
   │     │        │  │  ├─ _asyncio_selector_thread.py
   │     │        │  │  ├─ _contextmanagers.py
   │     │        │  │  ├─ _eventloop.py
   │     │        │  │  ├─ _exceptions.py
   │     │        │  │  ├─ _fileio.py
   │     │        │  │  ├─ _resources.py
   │     │        │  │  ├─ _signals.py
   │     │        │  │  ├─ _sockets.py
   │     │        │  │  ├─ _streams.py
   │     │        │  │  ├─ _subprocesses.py
   │     │        │  │  ├─ _synchronization.py
   │     │        │  │  ├─ _tasks.py
   │     │        │  │  ├─ _tempfile.py
   │     │        │  │  ├─ _testing.py
   │     │        │  │  └─ _typedattr.py
   │     │        │  ├─ abc
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _eventloop.cpython-312.pyc
   │     │        │  │  │  ├─ _resources.cpython-312.pyc
   │     │        │  │  │  ├─ _sockets.cpython-312.pyc
   │     │        │  │  │  ├─ _streams.cpython-312.pyc
   │     │        │  │  │  ├─ _subprocesses.cpython-312.pyc
   │     │        │  │  │  ├─ _tasks.cpython-312.pyc
   │     │        │  │  │  └─ _testing.cpython-312.pyc
   │     │        │  │  ├─ _eventloop.py
   │     │        │  │  ├─ _resources.py
   │     │        │  │  ├─ _sockets.py
   │     │        │  │  ├─ _streams.py
   │     │        │  │  ├─ _subprocesses.py
   │     │        │  │  ├─ _tasks.py
   │     │        │  │  └─ _testing.py
   │     │        │  ├─ from_thread.py
   │     │        │  ├─ functools.py
   │     │        │  ├─ lowlevel.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ pytest_plugin.py
   │     │        │  ├─ streams
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ buffered.cpython-312.pyc
   │     │        │  │  │  ├─ file.cpython-312.pyc
   │     │        │  │  │  ├─ memory.cpython-312.pyc
   │     │        │  │  │  ├─ stapled.cpython-312.pyc
   │     │        │  │  │  ├─ text.cpython-312.pyc
   │     │        │  │  │  └─ tls.cpython-312.pyc
   │     │        │  │  ├─ buffered.py
   │     │        │  │  ├─ file.py
   │     │        │  │  ├─ memory.py
   │     │        │  │  ├─ stapled.py
   │     │        │  │  ├─ text.py
   │     │        │  │  └─ tls.py
   │     │        │  ├─ to_interpreter.py
   │     │        │  ├─ to_process.py
   │     │        │  └─ to_thread.py
   │     │        ├─ anyio-4.13.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ certifi
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  └─ core.cpython-312.pyc
   │     │        │  ├─ cacert.pem
   │     │        │  ├─ core.py
   │     │        │  └─ py.typed
   │     │        ├─ certifi-2026.5.20.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ charset_normalizer
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ api.cpython-312.pyc
   │     │        │  │  ├─ cd.cpython-312.pyc
   │     │        │  │  ├─ constant.cpython-312.pyc
   │     │        │  │  ├─ legacy.cpython-312.pyc
   │     │        │  │  ├─ md.cpython-312.pyc
   │     │        │  │  ├─ models.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ api.py
   │     │        │  ├─ cd.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ cd.py
   │     │        │  ├─ cli
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __main__.py
   │     │        │  │  └─ __pycache__
   │     │        │  │     ├─ __init__.cpython-312.pyc
   │     │        │  │     └─ __main__.cpython-312.pyc
   │     │        │  ├─ constant.py
   │     │        │  ├─ legacy.py
   │     │        │  ├─ md.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ md.py
   │     │        │  ├─ models.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ utils.py
   │     │        │  └─ version.py
   │     │        ├─ charset_normalizer-3.4.7.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ click
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  ├─ _termui_impl.cpython-312.pyc
   │     │        │  │  ├─ _textwrap.cpython-312.pyc
   │     │        │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  ├─ _winconsole.cpython-312.pyc
   │     │        │  │  ├─ core.cpython-312.pyc
   │     │        │  │  ├─ decorators.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ formatting.cpython-312.pyc
   │     │        │  │  ├─ globals.cpython-312.pyc
   │     │        │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  ├─ shell_completion.cpython-312.pyc
   │     │        │  │  ├─ termui.cpython-312.pyc
   │     │        │  │  ├─ testing.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  └─ utils.cpython-312.pyc
   │     │        │  ├─ _compat.py
   │     │        │  ├─ _termui_impl.py
   │     │        │  ├─ _textwrap.py
   │     │        │  ├─ _utils.py
   │     │        │  ├─ _winconsole.py
   │     │        │  ├─ core.py
   │     │        │  ├─ decorators.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ formatting.py
   │     │        │  ├─ globals.py
   │     │        │  ├─ parser.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ shell_completion.py
   │     │        │  ├─ termui.py
   │     │        │  ├─ testing.py
   │     │        │  ├─ types.py
   │     │        │  └─ utils.py
   │     │        ├─ click-8.4.1.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.txt
   │     │        ├─ dotenv
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ ipython.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  ├─ variables.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ cli.py
   │     │        │  ├─ ipython.py
   │     │        │  ├─ main.py
   │     │        │  ├─ parser.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ variables.py
   │     │        │  └─ version.py
   │     │        ├─ environs
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  └─ types.cpython-312.pyc
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ py.typed
   │     │        │  └─ types.py
   │     │        ├─ environs-15.0.1.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ fastapi
   │     │        │  ├─ .agents
   │     │        │  │  └─ skills
   │     │        │  │     └─ fastapi
   │     │        │  │        ├─ SKILL.md
   │     │        │  │        └─ references
   │     │        │  │           ├─ dependencies.md
   │     │        │  │           ├─ other-tools.md
   │     │        │  │           └─ streaming.md
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ applications.cpython-312.pyc
   │     │        │  │  ├─ background.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ concurrency.cpython-312.pyc
   │     │        │  │  ├─ datastructures.cpython-312.pyc
   │     │        │  │  ├─ encoders.cpython-312.pyc
   │     │        │  │  ├─ exception_handlers.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ logger.cpython-312.pyc
   │     │        │  │  ├─ param_functions.cpython-312.pyc
   │     │        │  │  ├─ params.cpython-312.pyc
   │     │        │  │  ├─ requests.cpython-312.pyc
   │     │        │  │  ├─ responses.cpython-312.pyc
   │     │        │  │  ├─ routing.cpython-312.pyc
   │     │        │  │  ├─ sse.cpython-312.pyc
   │     │        │  │  ├─ staticfiles.cpython-312.pyc
   │     │        │  │  ├─ templating.cpython-312.pyc
   │     │        │  │  ├─ testclient.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ websockets.cpython-312.pyc
   │     │        │  ├─ _compat
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ shared.cpython-312.pyc
   │     │        │  │  │  └─ v2.cpython-312.pyc
   │     │        │  │  ├─ shared.py
   │     │        │  │  └─ v2.py
   │     │        │  ├─ applications.py
   │     │        │  ├─ background.py
   │     │        │  ├─ cli.py
   │     │        │  ├─ concurrency.py
   │     │        │  ├─ datastructures.py
   │     │        │  ├─ dependencies
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ models.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ encoders.py
   │     │        │  ├─ exception_handlers.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ logger.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asyncexitstack.cpython-312.pyc
   │     │        │  │  │  ├─ cors.cpython-312.pyc
   │     │        │  │  │  ├─ gzip.cpython-312.pyc
   │     │        │  │  │  ├─ httpsredirect.cpython-312.pyc
   │     │        │  │  │  ├─ trustedhost.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ asyncexitstack.py
   │     │        │  │  ├─ cors.py
   │     │        │  │  ├─ gzip.py
   │     │        │  │  ├─ httpsredirect.py
   │     │        │  │  ├─ trustedhost.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ openapi
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ constants.cpython-312.pyc
   │     │        │  │  │  ├─ docs.cpython-312.pyc
   │     │        │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ constants.py
   │     │        │  │  ├─ docs.py
   │     │        │  │  ├─ models.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ param_functions.py
   │     │        │  ├─ params.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ requests.py
   │     │        │  ├─ responses.py
   │     │        │  ├─ routing.py
   │     │        │  ├─ security
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ api_key.cpython-312.pyc
   │     │        │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  ├─ http.cpython-312.pyc
   │     │        │  │  │  ├─ oauth2.cpython-312.pyc
   │     │        │  │  │  ├─ open_id_connect_url.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ api_key.py
   │     │        │  │  ├─ base.py
   │     │        │  │  ├─ http.py
   │     │        │  │  ├─ oauth2.py
   │     │        │  │  ├─ open_id_connect_url.py
   │     │        │  │  └─ utils.py
   │     │        │  ├─ sse.py
   │     │        │  ├─ staticfiles.py
   │     │        │  ├─ templating.py
   │     │        │  ├─ testclient.py
   │     │        │  ├─ types.py
   │     │        │  ├─ utils.py
   │     │        │  └─ websockets.py
   │     │        ├─ fastapi-0.136.3.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ fastapi_cors
   │     │        │  ├─ VERSION
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ env.cpython-312.pyc
   │     │        │  │  └─ main.cpython-312.pyc
   │     │        │  ├─ env.py
   │     │        │  └─ main.py
   │     │        ├─ fastapi_cors-0.0.6.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ h11
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _abnf.cpython-312.pyc
   │     │        │  │  ├─ _connection.cpython-312.pyc
   │     │        │  │  ├─ _events.cpython-312.pyc
   │     │        │  │  ├─ _headers.cpython-312.pyc
   │     │        │  │  ├─ _readers.cpython-312.pyc
   │     │        │  │  ├─ _receivebuffer.cpython-312.pyc
   │     │        │  │  ├─ _state.cpython-312.pyc
   │     │        │  │  ├─ _util.cpython-312.pyc
   │     │        │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  └─ _writers.cpython-312.pyc
   │     │        │  ├─ _abnf.py
   │     │        │  ├─ _connection.py
   │     │        │  ├─ _events.py
   │     │        │  ├─ _headers.py
   │     │        │  ├─ _readers.py
   │     │        │  ├─ _receivebuffer.py
   │     │        │  ├─ _state.py
   │     │        │  ├─ _util.py
   │     │        │  ├─ _version.py
   │     │        │  ├─ _writers.py
   │     │        │  └─ py.typed
   │     │        ├─ h11-0.16.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE.txt
   │     │        │  └─ top_level.txt
   │     │        ├─ idna
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ cli.cpython-312.pyc
   │     │        │  │  ├─ codec.cpython-312.pyc
   │     │        │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  ├─ core.cpython-312.pyc
   │     │        │  │  ├─ idnadata.cpython-312.pyc
   │     │        │  │  ├─ intranges.cpython-312.pyc
   │     │        │  │  ├─ package_data.cpython-312.pyc
   │     │        │  │  └─ uts46data.cpython-312.pyc
   │     │        │  ├─ cli.py
   │     │        │  ├─ codec.py
   │     │        │  ├─ compat.py
   │     │        │  ├─ core.py
   │     │        │  ├─ idnadata.py
   │     │        │  ├─ intranges.py
   │     │        │  ├─ package_data.py
   │     │        │  ├─ py.typed
   │     │        │  └─ uts46data.py
   │     │        ├─ idna-3.16.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.md
   │     │        ├─ marshmallow
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ class_registry.cpython-312.pyc
   │     │        │  │  ├─ constants.cpython-312.pyc
   │     │        │  │  ├─ decorators.cpython-312.pyc
   │     │        │  │  ├─ error_store.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ orderedset.cpython-312.pyc
   │     │        │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  └─ validate.cpython-312.pyc
   │     │        │  ├─ class_registry.py
   │     │        │  ├─ constants.py
   │     │        │  ├─ decorators.py
   │     │        │  ├─ error_store.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ experimental
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ context.cpython-312.pyc
   │     │        │  │  └─ context.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ orderedset.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ schema.py
   │     │        │  ├─ types.py
   │     │        │  ├─ utils.py
   │     │        │  └─ validate.py
   │     │        ├─ marshmallow-4.3.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ numpy
   │     │        │  ├─ __config__.py
   │     │        │  ├─ __config__.pyi
   │     │        │  ├─ __init__.cython-30.pxd
   │     │        │  ├─ __init__.pxd
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __init__.pyi
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __config__.cpython-312.pyc
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _array_api_info.cpython-312.pyc
   │     │        │  │  ├─ _configtool.cpython-312.pyc
   │     │        │  │  ├─ _distributor_init.cpython-312.pyc
   │     │        │  │  ├─ _expired_attrs_2_0.cpython-312.pyc
   │     │        │  │  ├─ _globals.cpython-312.pyc
   │     │        │  │  ├─ _pytesttester.cpython-312.pyc
   │     │        │  │  ├─ conftest.cpython-312.pyc
   │     │        │  │  ├─ dtypes.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ matlib.cpython-312.pyc
   │     │        │  │  └─ version.cpython-312.pyc
   │     │        │  ├─ _array_api_info.py
   │     │        │  ├─ _array_api_info.pyi
   │     │        │  ├─ _configtool.py
   │     │        │  ├─ _configtool.pyi
   │     │        │  ├─ _core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _add_newdocs.cpython-312.pyc
   │     │        │  │  │  ├─ _add_newdocs_scalars.cpython-312.pyc
   │     │        │  │  │  ├─ _asarray.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_ctypes.cpython-312.pyc
   │     │        │  │  │  ├─ _exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ _internal.cpython-312.pyc
   │     │        │  │  │  ├─ _methods.cpython-312.pyc
   │     │        │  │  │  ├─ _string_helpers.cpython-312.pyc
   │     │        │  │  │  ├─ _type_aliases.cpython-312.pyc
   │     │        │  │  │  ├─ _ufunc_config.cpython-312.pyc
   │     │        │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │  │  ├─ cversions.cpython-312.pyc
   │     │        │  │  │  ├─ defchararray.cpython-312.pyc
   │     │        │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │  │  ├─ function_base.cpython-312.pyc
   │     │        │  │  │  ├─ getlimits.cpython-312.pyc
   │     │        │  │  │  ├─ memmap.cpython-312.pyc
   │     │        │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  ├─ printoptions.cpython-312.pyc
   │     │        │  │  │  ├─ records.cpython-312.pyc
   │     │        │  │  │  ├─ shape_base.cpython-312.pyc
   │     │        │  │  │  ├─ strings.cpython-312.pyc
   │     │        │  │  │  └─ umath.cpython-312.pyc
   │     │        │  │  ├─ _add_newdocs.py
   │     │        │  │  ├─ _add_newdocs.pyi
   │     │        │  │  ├─ _add_newdocs_scalars.py
   │     │        │  │  ├─ _add_newdocs_scalars.pyi
   │     │        │  │  ├─ _asarray.py
   │     │        │  │  ├─ _asarray.pyi
   │     │        │  │  ├─ _dtype.py
   │     │        │  │  ├─ _dtype.pyi
   │     │        │  │  ├─ _dtype_ctypes.py
   │     │        │  │  ├─ _dtype_ctypes.pyi
   │     │        │  │  ├─ _exceptions.py
   │     │        │  │  ├─ _exceptions.pyi
   │     │        │  │  ├─ _internal.py
   │     │        │  │  ├─ _internal.pyi
   │     │        │  │  ├─ _methods.py
   │     │        │  │  ├─ _methods.pyi
   │     │        │  │  ├─ _multiarray_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _multiarray_umath.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _operand_flag_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _rational_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _simd.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _simd.pyi
   │     │        │  │  ├─ _string_helpers.py
   │     │        │  │  ├─ _string_helpers.pyi
   │     │        │  │  ├─ _struct_ufunc_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _type_aliases.py
   │     │        │  │  ├─ _type_aliases.pyi
   │     │        │  │  ├─ _ufunc_config.py
   │     │        │  │  ├─ _ufunc_config.pyi
   │     │        │  │  ├─ _umath_tests.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _umath_tests.pyi
   │     │        │  │  ├─ arrayprint.py
   │     │        │  │  ├─ arrayprint.pyi
   │     │        │  │  ├─ cversions.py
   │     │        │  │  ├─ defchararray.py
   │     │        │  │  ├─ defchararray.pyi
   │     │        │  │  ├─ einsumfunc.py
   │     │        │  │  ├─ einsumfunc.pyi
   │     │        │  │  ├─ fromnumeric.py
   │     │        │  │  ├─ fromnumeric.pyi
   │     │        │  │  ├─ function_base.py
   │     │        │  │  ├─ function_base.pyi
   │     │        │  │  ├─ getlimits.py
   │     │        │  │  ├─ getlimits.pyi
   │     │        │  │  ├─ include
   │     │        │  │  │  └─ numpy
   │     │        │  │  │     ├─ __multiarray_api.c
   │     │        │  │  │     ├─ __multiarray_api.h
   │     │        │  │  │     ├─ __ufunc_api.c
   │     │        │  │  │     ├─ __ufunc_api.h
   │     │        │  │  │     ├─ _neighborhood_iterator_imp.h
   │     │        │  │  │     ├─ _numpyconfig.h
   │     │        │  │  │     ├─ _public_dtype_api_table.h
   │     │        │  │  │     ├─ arrayobject.h
   │     │        │  │  │     ├─ arrayscalars.h
   │     │        │  │  │     ├─ dtype_api.h
   │     │        │  │  │     ├─ halffloat.h
   │     │        │  │  │     ├─ ndarrayobject.h
   │     │        │  │  │     ├─ ndarraytypes.h
   │     │        │  │  │     ├─ npy_2_compat.h
   │     │        │  │  │     ├─ npy_2_complexcompat.h
   │     │        │  │  │     ├─ npy_3kcompat.h
   │     │        │  │  │     ├─ npy_common.h
   │     │        │  │  │     ├─ npy_cpu.h
   │     │        │  │  │     ├─ npy_endian.h
   │     │        │  │  │     ├─ npy_math.h
   │     │        │  │  │     ├─ npy_no_deprecated_api.h
   │     │        │  │  │     ├─ npy_os.h
   │     │        │  │  │     ├─ numpyconfig.h
   │     │        │  │  │     ├─ random
   │     │        │  │  │     │  ├─ LICENSE.txt
   │     │        │  │  │     │  ├─ bitgen.h
   │     │        │  │  │     │  ├─ distributions.h
   │     │        │  │  │     │  └─ libdivide.h
   │     │        │  │  │     ├─ ufuncobject.h
   │     │        │  │  │     └─ utils.h
   │     │        │  │  ├─ lib
   │     │        │  │  │  ├─ libnpymath.a
   │     │        │  │  │  ├─ npy-pkg-config
   │     │        │  │  │  │  ├─ mlib.ini
   │     │        │  │  │  │  └─ npymath.ini
   │     │        │  │  │  └─ pkgconfig
   │     │        │  │  │     └─ numpy.pc
   │     │        │  │  ├─ memmap.py
   │     │        │  │  ├─ memmap.pyi
   │     │        │  │  ├─ multiarray.py
   │     │        │  │  ├─ multiarray.pyi
   │     │        │  │  ├─ numeric.py
   │     │        │  │  ├─ numeric.pyi
   │     │        │  │  ├─ numerictypes.py
   │     │        │  │  ├─ numerictypes.pyi
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ printoptions.py
   │     │        │  │  ├─ printoptions.pyi
   │     │        │  │  ├─ records.py
   │     │        │  │  ├─ records.pyi
   │     │        │  │  ├─ shape_base.py
   │     │        │  │  ├─ shape_base.pyi
   │     │        │  │  ├─ strings.py
   │     │        │  │  ├─ strings.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ _locales.cpython-312.pyc
   │     │        │  │  │  │  ├─ _natype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_abc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_api.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_argparse.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_api_info.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_coercion.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_interface.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraymethod.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayobject.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayprint.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_casting_floatingpoint_errors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_casting_unittests.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_conversion_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cpu_dispatcher.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cpu_features.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_custom_dtypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_cython.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_datetime.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_defchararray.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_dlpack.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_dtype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_einsum.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_errstate.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_extint128.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_finfo.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_function_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_getlimits.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_half.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_hashtable.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_indexerrors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_indexing.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_item_selection.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_limited_api.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_longdouble.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mem_overlap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mem_policy.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_memmap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multiarray.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multiprocessing.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_multithreading.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nditer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nep50_promotions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_numeric.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_numerictypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_overrides.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_print.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_protocols.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_records.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalar_ctors.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalar_methods.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarbuffer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarinherit.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarmath.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_scalarprint.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_shape_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_simd.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_simd_module.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_stringdtype.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_strings.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_ufunc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath_accuracy.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_umath_complex.cpython-312.pyc
   │     │        │  │  │  │  └─ test_unicode.cpython-312.pyc
   │     │        │  │  │  ├─ _locales.py
   │     │        │  │  │  ├─ _natype.py
   │     │        │  │  │  ├─ data
   │     │        │  │  │  │  ├─ astype_copy.pkl
   │     │        │  │  │  │  ├─ generate_umath_validation_data.cpp
   │     │        │  │  │  │  ├─ recarray_from_file.fits
   │     │        │  │  │  │  ├─ umath-validation-set-README.txt
   │     │        │  │  │  │  ├─ umath-validation-set-arccos.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arccosh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arcsin.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arcsinh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arctan.csv
   │     │        │  │  │  │  ├─ umath-validation-set-arctanh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cbrt.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cos.csv
   │     │        │  │  │  │  ├─ umath-validation-set-cosh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-exp.csv
   │     │        │  │  │  │  ├─ umath-validation-set-exp2.csv
   │     │        │  │  │  │  ├─ umath-validation-set-expm1.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log10.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log1p.csv
   │     │        │  │  │  │  ├─ umath-validation-set-log2.csv
   │     │        │  │  │  │  ├─ umath-validation-set-sin.csv
   │     │        │  │  │  │  ├─ umath-validation-set-sinh.csv
   │     │        │  │  │  │  ├─ umath-validation-set-tan.csv
   │     │        │  │  │  │  └─ umath-validation-set-tanh.csv
   │     │        │  │  │  ├─ examples
   │     │        │  │  │  │  ├─ cython
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  └─ setup.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ checks.pyx
   │     │        │  │  │  │  │  ├─ meson.build
   │     │        │  │  │  │  │  └─ setup.py
   │     │        │  │  │  │  └─ limited_api
   │     │        │  │  │  │     ├─ __pycache__
   │     │        │  │  │  │     │  └─ setup.cpython-312.pyc
   │     │        │  │  │  │     ├─ limited_api1.c
   │     │        │  │  │  │     ├─ limited_api2.pyx
   │     │        │  │  │  │     ├─ limited_api_latest.c
   │     │        │  │  │  │     ├─ meson.build
   │     │        │  │  │  │     └─ setup.py
   │     │        │  │  │  ├─ test__exceptions.py
   │     │        │  │  │  ├─ test_abc.py
   │     │        │  │  │  ├─ test_api.py
   │     │        │  │  │  ├─ test_argparse.py
   │     │        │  │  │  ├─ test_array_api_info.py
   │     │        │  │  │  ├─ test_array_coercion.py
   │     │        │  │  │  ├─ test_array_interface.py
   │     │        │  │  │  ├─ test_arraymethod.py
   │     │        │  │  │  ├─ test_arrayobject.py
   │     │        │  │  │  ├─ test_arrayprint.py
   │     │        │  │  │  ├─ test_casting_floatingpoint_errors.py
   │     │        │  │  │  ├─ test_casting_unittests.py
   │     │        │  │  │  ├─ test_conversion_utils.py
   │     │        │  │  │  ├─ test_cpu_dispatcher.py
   │     │        │  │  │  ├─ test_cpu_features.py
   │     │        │  │  │  ├─ test_custom_dtypes.py
   │     │        │  │  │  ├─ test_cython.py
   │     │        │  │  │  ├─ test_datetime.py
   │     │        │  │  │  ├─ test_defchararray.py
   │     │        │  │  │  ├─ test_deprecations.py
   │     │        │  │  │  ├─ test_dlpack.py
   │     │        │  │  │  ├─ test_dtype.py
   │     │        │  │  │  ├─ test_einsum.py
   │     │        │  │  │  ├─ test_errstate.py
   │     │        │  │  │  ├─ test_extint128.py
   │     │        │  │  │  ├─ test_finfo.py
   │     │        │  │  │  ├─ test_function_base.py
   │     │        │  │  │  ├─ test_getlimits.py
   │     │        │  │  │  ├─ test_half.py
   │     │        │  │  │  ├─ test_hashtable.py
   │     │        │  │  │  ├─ test_indexerrors.py
   │     │        │  │  │  ├─ test_indexing.py
   │     │        │  │  │  ├─ test_item_selection.py
   │     │        │  │  │  ├─ test_limited_api.py
   │     │        │  │  │  ├─ test_longdouble.py
   │     │        │  │  │  ├─ test_mem_overlap.py
   │     │        │  │  │  ├─ test_mem_policy.py
   │     │        │  │  │  ├─ test_memmap.py
   │     │        │  │  │  ├─ test_multiarray.py
   │     │        │  │  │  ├─ test_multiprocessing.py
   │     │        │  │  │  ├─ test_multithreading.py
   │     │        │  │  │  ├─ test_nditer.py
   │     │        │  │  │  ├─ test_nep50_promotions.py
   │     │        │  │  │  ├─ test_numeric.py
   │     │        │  │  │  ├─ test_numerictypes.py
   │     │        │  │  │  ├─ test_overrides.py
   │     │        │  │  │  ├─ test_print.py
   │     │        │  │  │  ├─ test_protocols.py
   │     │        │  │  │  ├─ test_records.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_scalar_ctors.py
   │     │        │  │  │  ├─ test_scalar_methods.py
   │     │        │  │  │  ├─ test_scalarbuffer.py
   │     │        │  │  │  ├─ test_scalarinherit.py
   │     │        │  │  │  ├─ test_scalarmath.py
   │     │        │  │  │  ├─ test_scalarprint.py
   │     │        │  │  │  ├─ test_shape_base.py
   │     │        │  │  │  ├─ test_simd.py
   │     │        │  │  │  ├─ test_simd_module.py
   │     │        │  │  │  ├─ test_stringdtype.py
   │     │        │  │  │  ├─ test_strings.py
   │     │        │  │  │  ├─ test_ufunc.py
   │     │        │  │  │  ├─ test_umath.py
   │     │        │  │  │  ├─ test_umath_accuracy.py
   │     │        │  │  │  ├─ test_umath_complex.py
   │     │        │  │  │  └─ test_unicode.py
   │     │        │  │  ├─ umath.py
   │     │        │  │  └─ umath.pyi
   │     │        │  ├─ _distributor_init.py
   │     │        │  ├─ _distributor_init.pyi
   │     │        │  ├─ _expired_attrs_2_0.py
   │     │        │  ├─ _expired_attrs_2_0.pyi
   │     │        │  ├─ _globals.py
   │     │        │  ├─ _globals.pyi
   │     │        │  ├─ _pyinstaller
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ hook-numpy.cpython-312.pyc
   │     │        │  │  ├─ hook-numpy.py
   │     │        │  │  ├─ hook-numpy.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ pyinstaller-smoke.cpython-312.pyc
   │     │        │  │     │  └─ test_pyinstaller.cpython-312.pyc
   │     │        │  │     ├─ pyinstaller-smoke.py
   │     │        │  │     └─ test_pyinstaller.py
   │     │        │  ├─ _pytesttester.py
   │     │        │  ├─ _pytesttester.pyi
   │     │        │  ├─ _typing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _add_docstring.cpython-312.pyc
   │     │        │  │  │  ├─ _array_like.cpython-312.pyc
   │     │        │  │  │  ├─ _char_codes.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_like.cpython-312.pyc
   │     │        │  │  │  ├─ _extended_precision.cpython-312.pyc
   │     │        │  │  │  ├─ _nbit.cpython-312.pyc
   │     │        │  │  │  ├─ _nbit_base.cpython-312.pyc
   │     │        │  │  │  ├─ _nested_sequence.cpython-312.pyc
   │     │        │  │  │  ├─ _scalars.cpython-312.pyc
   │     │        │  │  │  ├─ _shape.cpython-312.pyc
   │     │        │  │  │  └─ _ufunc.cpython-312.pyc
   │     │        │  │  ├─ _add_docstring.py
   │     │        │  │  ├─ _array_like.py
   │     │        │  │  ├─ _char_codes.py
   │     │        │  │  ├─ _dtype_like.py
   │     │        │  │  ├─ _extended_precision.py
   │     │        │  │  ├─ _nbit.py
   │     │        │  │  ├─ _nbit_base.py
   │     │        │  │  ├─ _nbit_base.pyi
   │     │        │  │  ├─ _nested_sequence.py
   │     │        │  │  ├─ _scalars.py
   │     │        │  │  ├─ _shape.py
   │     │        │  │  ├─ _ufunc.py
   │     │        │  │  └─ _ufunc.pyi
   │     │        │  ├─ _utils
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _convertions.cpython-312.pyc
   │     │        │  │  │  ├─ _inspect.cpython-312.pyc
   │     │        │  │  │  └─ _pep440.cpython-312.pyc
   │     │        │  │  ├─ _convertions.py
   │     │        │  │  ├─ _convertions.pyi
   │     │        │  │  ├─ _inspect.py
   │     │        │  │  ├─ _inspect.pyi
   │     │        │  │  ├─ _pep440.py
   │     │        │  │  └─ _pep440.pyi
   │     │        │  ├─ char
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ conftest.py
   │     │        │  ├─ core
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype.cpython-312.pyc
   │     │        │  │  │  ├─ _dtype_ctypes.cpython-312.pyc
   │     │        │  │  │  ├─ _internal.cpython-312.pyc
   │     │        │  │  │  ├─ _multiarray_umath.cpython-312.pyc
   │     │        │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │  │  ├─ defchararray.cpython-312.pyc
   │     │        │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │  │  ├─ function_base.cpython-312.pyc
   │     │        │  │  │  ├─ getlimits.cpython-312.pyc
   │     │        │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  ├─ records.cpython-312.pyc
   │     │        │  │  │  ├─ shape_base.cpython-312.pyc
   │     │        │  │  │  └─ umath.cpython-312.pyc
   │     │        │  │  ├─ _dtype.py
   │     │        │  │  ├─ _dtype.pyi
   │     │        │  │  ├─ _dtype_ctypes.py
   │     │        │  │  ├─ _dtype_ctypes.pyi
   │     │        │  │  ├─ _internal.py
   │     │        │  │  ├─ _multiarray_umath.py
   │     │        │  │  ├─ _utils.py
   │     │        │  │  ├─ arrayprint.py
   │     │        │  │  ├─ defchararray.py
   │     │        │  │  ├─ einsumfunc.py
   │     │        │  │  ├─ fromnumeric.py
   │     │        │  │  ├─ function_base.py
   │     │        │  │  ├─ getlimits.py
   │     │        │  │  ├─ multiarray.py
   │     │        │  │  ├─ numeric.py
   │     │        │  │  ├─ numerictypes.py
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ records.py
   │     │        │  │  ├─ shape_base.py
   │     │        │  │  └─ umath.py
   │     │        │  ├─ ctypeslib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _ctypeslib.cpython-312.pyc
   │     │        │  │  ├─ _ctypeslib.py
   │     │        │  │  └─ _ctypeslib.pyi
   │     │        │  ├─ doc
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  └─ ufuncs.cpython-312.pyc
   │     │        │  │  └─ ufuncs.py
   │     │        │  ├─ dtypes.py
   │     │        │  ├─ dtypes.pyi
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ exceptions.pyi
   │     │        │  ├─ f2py
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __main__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  │  ├─ _isocbind.cpython-312.pyc
   │     │        │  │  │  ├─ _src_pyf.cpython-312.pyc
   │     │        │  │  │  ├─ auxfuncs.cpython-312.pyc
   │     │        │  │  │  ├─ capi_maps.cpython-312.pyc
   │     │        │  │  │  ├─ cb_rules.cpython-312.pyc
   │     │        │  │  │  ├─ cfuncs.cpython-312.pyc
   │     │        │  │  │  ├─ common_rules.cpython-312.pyc
   │     │        │  │  │  ├─ crackfortran.cpython-312.pyc
   │     │        │  │  │  ├─ diagnose.cpython-312.pyc
   │     │        │  │  │  ├─ f2py2e.cpython-312.pyc
   │     │        │  │  │  ├─ f90mod_rules.cpython-312.pyc
   │     │        │  │  │  ├─ func2subr.cpython-312.pyc
   │     │        │  │  │  ├─ rules.cpython-312.pyc
   │     │        │  │  │  ├─ symbolic.cpython-312.pyc
   │     │        │  │  │  └─ use_rules.cpython-312.pyc
   │     │        │  │  ├─ __version__.py
   │     │        │  │  ├─ __version__.pyi
   │     │        │  │  ├─ _backends
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __init__.pyi
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _backend.cpython-312.pyc
   │     │        │  │  │  │  ├─ _distutils.cpython-312.pyc
   │     │        │  │  │  │  └─ _meson.cpython-312.pyc
   │     │        │  │  │  ├─ _backend.py
   │     │        │  │  │  ├─ _backend.pyi
   │     │        │  │  │  ├─ _distutils.py
   │     │        │  │  │  ├─ _distutils.pyi
   │     │        │  │  │  ├─ _meson.py
   │     │        │  │  │  ├─ _meson.pyi
   │     │        │  │  │  └─ meson.build.template
   │     │        │  │  ├─ _isocbind.py
   │     │        │  │  ├─ _isocbind.pyi
   │     │        │  │  ├─ _src_pyf.py
   │     │        │  │  ├─ _src_pyf.pyi
   │     │        │  │  ├─ auxfuncs.py
   │     │        │  │  ├─ auxfuncs.pyi
   │     │        │  │  ├─ capi_maps.py
   │     │        │  │  ├─ capi_maps.pyi
   │     │        │  │  ├─ cb_rules.py
   │     │        │  │  ├─ cb_rules.pyi
   │     │        │  │  ├─ cfuncs.py
   │     │        │  │  ├─ cfuncs.pyi
   │     │        │  │  ├─ common_rules.py
   │     │        │  │  ├─ common_rules.pyi
   │     │        │  │  ├─ crackfortran.py
   │     │        │  │  ├─ crackfortran.pyi
   │     │        │  │  ├─ diagnose.py
   │     │        │  │  ├─ diagnose.pyi
   │     │        │  │  ├─ f2py2e.py
   │     │        │  │  ├─ f2py2e.pyi
   │     │        │  │  ├─ f90mod_rules.py
   │     │        │  │  ├─ f90mod_rules.pyi
   │     │        │  │  ├─ func2subr.py
   │     │        │  │  ├─ func2subr.pyi
   │     │        │  │  ├─ rules.py
   │     │        │  │  ├─ rules.pyi
   │     │        │  │  ├─ setup.cfg
   │     │        │  │  ├─ src
   │     │        │  │  │  ├─ fortranobject.c
   │     │        │  │  │  └─ fortranobject.h
   │     │        │  │  ├─ symbolic.py
   │     │        │  │  ├─ symbolic.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_abstract_interface.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_from_pyobj.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_assumed_shape.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_block_docstring.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_callback.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_capi_maps.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_common.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_crackfortran.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_data.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_docs.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_f2cmap.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_f2py2e.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_isoc.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_kind.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mixed.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_modules.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_parameter.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_pyf_src.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_quoted_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_character.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_complex.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_integer.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_logical.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_return_real.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_routines.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_semicolon_split.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_size.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_string.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_symbolic.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_value_attrspec.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ src
   │     │        │  │  │  │  ├─ abstract_interface
   │     │        │  │  │  │  │  ├─ foo.f90
   │     │        │  │  │  │  │  └─ gh18403_mod.f90
   │     │        │  │  │  │  ├─ array_from_pyobj
   │     │        │  │  │  │  │  └─ wrapmodule.c
   │     │        │  │  │  │  ├─ assumed_shape
   │     │        │  │  │  │  │  ├─ .f2py_f2cmap
   │     │        │  │  │  │  │  ├─ foo_free.f90
   │     │        │  │  │  │  │  ├─ foo_mod.f90
   │     │        │  │  │  │  │  ├─ foo_use.f90
   │     │        │  │  │  │  │  └─ precision.f90
   │     │        │  │  │  │  ├─ block_docstring
   │     │        │  │  │  │  │  └─ foo.f
   │     │        │  │  │  │  ├─ callback
   │     │        │  │  │  │  │  ├─ foo.f
   │     │        │  │  │  │  │  ├─ gh17797.f90
   │     │        │  │  │  │  │  ├─ gh18335.f90
   │     │        │  │  │  │  │  ├─ gh25211.f
   │     │        │  │  │  │  │  ├─ gh25211.pyf
   │     │        │  │  │  │  │  └─ gh26681.f90
   │     │        │  │  │  │  ├─ cli
   │     │        │  │  │  │  │  ├─ gh_22819.pyf
   │     │        │  │  │  │  │  ├─ hi77.f
   │     │        │  │  │  │  │  └─ hiworld.f90
   │     │        │  │  │  │  ├─ common
   │     │        │  │  │  │  │  ├─ block.f
   │     │        │  │  │  │  │  └─ gh19161.f90
   │     │        │  │  │  │  ├─ crackfortran
   │     │        │  │  │  │  │  ├─ accesstype.f90
   │     │        │  │  │  │  │  ├─ common_with_division.f
   │     │        │  │  │  │  │  ├─ data_common.f
   │     │        │  │  │  │  │  ├─ data_multiplier.f
   │     │        │  │  │  │  │  ├─ data_stmts.f90
   │     │        │  │  │  │  │  ├─ data_with_comments.f
   │     │        │  │  │  │  │  ├─ foo_deps.f90
   │     │        │  │  │  │  │  ├─ gh15035.f
   │     │        │  │  │  │  │  ├─ gh17859.f
   │     │        │  │  │  │  │  ├─ gh22648.pyf
   │     │        │  │  │  │  │  ├─ gh23533.f
   │     │        │  │  │  │  │  ├─ gh23598.f90
   │     │        │  │  │  │  │  ├─ gh23598Warn.f90
   │     │        │  │  │  │  │  ├─ gh23879.f90
   │     │        │  │  │  │  │  ├─ gh27697.f90
   │     │        │  │  │  │  │  ├─ gh2848.f90
   │     │        │  │  │  │  │  ├─ operators.f90
   │     │        │  │  │  │  │  ├─ privatemod.f90
   │     │        │  │  │  │  │  ├─ publicmod.f90
   │     │        │  │  │  │  │  ├─ pubprivmod.f90
   │     │        │  │  │  │  │  └─ unicode_comment.f90
   │     │        │  │  │  │  ├─ f2cmap
   │     │        │  │  │  │  │  ├─ .f2py_f2cmap
   │     │        │  │  │  │  │  └─ isoFortranEnvMap.f90
   │     │        │  │  │  │  ├─ isocintrin
   │     │        │  │  │  │  │  └─ isoCtests.f90
   │     │        │  │  │  │  ├─ kind
   │     │        │  │  │  │  │  └─ foo.f90
   │     │        │  │  │  │  ├─ mixed
   │     │        │  │  │  │  │  ├─ foo.f
   │     │        │  │  │  │  │  ├─ foo_fixed.f90
   │     │        │  │  │  │  │  └─ foo_free.f90
   │     │        │  │  │  │  ├─ modules
   │     │        │  │  │  │  │  ├─ gh25337
   │     │        │  │  │  │  │  │  ├─ data.f90
   │     │        │  │  │  │  │  │  └─ use_data.f90
   │     │        │  │  │  │  │  ├─ gh26920
   │     │        │  │  │  │  │  │  ├─ two_mods_with_no_public_entities.f90
   │     │        │  │  │  │  │  │  └─ two_mods_with_one_public_routine.f90
   │     │        │  │  │  │  │  ├─ module_data_docstring.f90
   │     │        │  │  │  │  │  └─ use_modules.f90
   │     │        │  │  │  │  ├─ negative_bounds
   │     │        │  │  │  │  │  └─ issue_20853.f90
   │     │        │  │  │  │  ├─ parameter
   │     │        │  │  │  │  │  ├─ constant_array.f90
   │     │        │  │  │  │  │  ├─ constant_both.f90
   │     │        │  │  │  │  │  ├─ constant_compound.f90
   │     │        │  │  │  │  │  ├─ constant_integer.f90
   │     │        │  │  │  │  │  ├─ constant_non_compound.f90
   │     │        │  │  │  │  │  └─ constant_real.f90
   │     │        │  │  │  │  ├─ quoted_character
   │     │        │  │  │  │  │  └─ foo.f
   │     │        │  │  │  │  ├─ regression
   │     │        │  │  │  │  │  ├─ AB.inc
   │     │        │  │  │  │  │  ├─ assignOnlyModule.f90
   │     │        │  │  │  │  │  ├─ datonly.f90
   │     │        │  │  │  │  │  ├─ f77comments.f
   │     │        │  │  │  │  │  ├─ f77fixedform.f95
   │     │        │  │  │  │  │  ├─ f90continuation.f90
   │     │        │  │  │  │  │  ├─ incfile.f90
   │     │        │  │  │  │  │  ├─ inout.f90
   │     │        │  │  │  │  │  ├─ lower_f2py_fortran.f90
   │     │        │  │  │  │  │  └─ mod_derived_types.f90
   │     │        │  │  │  │  ├─ return_character
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_complex
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_integer
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_logical
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ return_real
   │     │        │  │  │  │  │  ├─ foo77.f
   │     │        │  │  │  │  │  └─ foo90.f90
   │     │        │  │  │  │  ├─ routines
   │     │        │  │  │  │  │  ├─ funcfortranname.f
   │     │        │  │  │  │  │  ├─ funcfortranname.pyf
   │     │        │  │  │  │  │  ├─ subrout.f
   │     │        │  │  │  │  │  └─ subrout.pyf
   │     │        │  │  │  │  ├─ size
   │     │        │  │  │  │  │  └─ foo.f90
   │     │        │  │  │  │  ├─ string
   │     │        │  │  │  │  │  ├─ char.f90
   │     │        │  │  │  │  │  ├─ fixed_string.f90
   │     │        │  │  │  │  │  ├─ gh24008.f
   │     │        │  │  │  │  │  ├─ gh24662.f90
   │     │        │  │  │  │  │  ├─ gh25286.f90
   │     │        │  │  │  │  │  ├─ gh25286.pyf
   │     │        │  │  │  │  │  ├─ gh25286_bc.pyf
   │     │        │  │  │  │  │  ├─ scalar_string.f90
   │     │        │  │  │  │  │  └─ string.f
   │     │        │  │  │  │  └─ value_attrspec
   │     │        │  │  │  │     └─ gh21665.f90
   │     │        │  │  │  ├─ test_abstract_interface.py
   │     │        │  │  │  ├─ test_array_from_pyobj.py
   │     │        │  │  │  ├─ test_assumed_shape.py
   │     │        │  │  │  ├─ test_block_docstring.py
   │     │        │  │  │  ├─ test_callback.py
   │     │        │  │  │  ├─ test_capi_maps.py
   │     │        │  │  │  ├─ test_character.py
   │     │        │  │  │  ├─ test_common.py
   │     │        │  │  │  ├─ test_crackfortran.py
   │     │        │  │  │  ├─ test_data.py
   │     │        │  │  │  ├─ test_docs.py
   │     │        │  │  │  ├─ test_f2cmap.py
   │     │        │  │  │  ├─ test_f2py2e.py
   │     │        │  │  │  ├─ test_isoc.py
   │     │        │  │  │  ├─ test_kind.py
   │     │        │  │  │  ├─ test_mixed.py
   │     │        │  │  │  ├─ test_modules.py
   │     │        │  │  │  ├─ test_parameter.py
   │     │        │  │  │  ├─ test_pyf_src.py
   │     │        │  │  │  ├─ test_quoted_character.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_return_character.py
   │     │        │  │  │  ├─ test_return_complex.py
   │     │        │  │  │  ├─ test_return_integer.py
   │     │        │  │  │  ├─ test_return_logical.py
   │     │        │  │  │  ├─ test_return_real.py
   │     │        │  │  │  ├─ test_routines.py
   │     │        │  │  │  ├─ test_semicolon_split.py
   │     │        │  │  │  ├─ test_size.py
   │     │        │  │  │  ├─ test_string.py
   │     │        │  │  │  ├─ test_symbolic.py
   │     │        │  │  │  ├─ test_value_attrspec.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ use_rules.py
   │     │        │  │  └─ use_rules.pyi
   │     │        │  ├─ fft
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _helper.cpython-312.pyc
   │     │        │  │  │  └─ _pocketfft.cpython-312.pyc
   │     │        │  │  ├─ _helper.py
   │     │        │  │  ├─ _helper.pyi
   │     │        │  │  ├─ _pocketfft.py
   │     │        │  │  ├─ _pocketfft.pyi
   │     │        │  │  ├─ _pocketfft_umath.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_helper.cpython-312.pyc
   │     │        │  │     │  └─ test_pocketfft.cpython-312.pyc
   │     │        │  │     ├─ test_helper.py
   │     │        │  │     └─ test_pocketfft.py
   │     │        │  ├─ lib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _array_utils_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arraypad_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arraysetops_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _arrayterator_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _datasource.cpython-312.pyc
   │     │        │  │  │  ├─ _format_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _function_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _histograms_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _index_tricks_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _iotools.cpython-312.pyc
   │     │        │  │  │  ├─ _nanfunctions_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _npyio_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _polynomial_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _scimath_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _shape_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _stride_tricks_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _twodim_base_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _type_check_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _ufunclike_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _user_array_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _utils_impl.cpython-312.pyc
   │     │        │  │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  │  ├─ array_utils.cpython-312.pyc
   │     │        │  │  │  ├─ format.cpython-312.pyc
   │     │        │  │  │  ├─ introspect.cpython-312.pyc
   │     │        │  │  │  ├─ mixins.cpython-312.pyc
   │     │        │  │  │  ├─ npyio.cpython-312.pyc
   │     │        │  │  │  ├─ recfunctions.cpython-312.pyc
   │     │        │  │  │  ├─ scimath.cpython-312.pyc
   │     │        │  │  │  ├─ stride_tricks.cpython-312.pyc
   │     │        │  │  │  └─ user_array.cpython-312.pyc
   │     │        │  │  ├─ _array_utils_impl.py
   │     │        │  │  ├─ _array_utils_impl.pyi
   │     │        │  │  ├─ _arraypad_impl.py
   │     │        │  │  ├─ _arraypad_impl.pyi
   │     │        │  │  ├─ _arraysetops_impl.py
   │     │        │  │  ├─ _arraysetops_impl.pyi
   │     │        │  │  ├─ _arrayterator_impl.py
   │     │        │  │  ├─ _arrayterator_impl.pyi
   │     │        │  │  ├─ _datasource.py
   │     │        │  │  ├─ _datasource.pyi
   │     │        │  │  ├─ _format_impl.py
   │     │        │  │  ├─ _format_impl.pyi
   │     │        │  │  ├─ _function_base_impl.py
   │     │        │  │  ├─ _function_base_impl.pyi
   │     │        │  │  ├─ _histograms_impl.py
   │     │        │  │  ├─ _histograms_impl.pyi
   │     │        │  │  ├─ _index_tricks_impl.py
   │     │        │  │  ├─ _index_tricks_impl.pyi
   │     │        │  │  ├─ _iotools.py
   │     │        │  │  ├─ _iotools.pyi
   │     │        │  │  ├─ _nanfunctions_impl.py
   │     │        │  │  ├─ _nanfunctions_impl.pyi
   │     │        │  │  ├─ _npyio_impl.py
   │     │        │  │  ├─ _npyio_impl.pyi
   │     │        │  │  ├─ _polynomial_impl.py
   │     │        │  │  ├─ _polynomial_impl.pyi
   │     │        │  │  ├─ _scimath_impl.py
   │     │        │  │  ├─ _scimath_impl.pyi
   │     │        │  │  ├─ _shape_base_impl.py
   │     │        │  │  ├─ _shape_base_impl.pyi
   │     │        │  │  ├─ _stride_tricks_impl.py
   │     │        │  │  ├─ _stride_tricks_impl.pyi
   │     │        │  │  ├─ _twodim_base_impl.py
   │     │        │  │  ├─ _twodim_base_impl.pyi
   │     │        │  │  ├─ _type_check_impl.py
   │     │        │  │  ├─ _type_check_impl.pyi
   │     │        │  │  ├─ _ufunclike_impl.py
   │     │        │  │  ├─ _ufunclike_impl.pyi
   │     │        │  │  ├─ _user_array_impl.py
   │     │        │  │  ├─ _user_array_impl.pyi
   │     │        │  │  ├─ _utils_impl.py
   │     │        │  │  ├─ _utils_impl.pyi
   │     │        │  │  ├─ _version.py
   │     │        │  │  ├─ _version.pyi
   │     │        │  │  ├─ array_utils.py
   │     │        │  │  ├─ array_utils.pyi
   │     │        │  │  ├─ format.py
   │     │        │  │  ├─ format.pyi
   │     │        │  │  ├─ introspect.py
   │     │        │  │  ├─ introspect.pyi
   │     │        │  │  ├─ mixins.py
   │     │        │  │  ├─ mixins.pyi
   │     │        │  │  ├─ npyio.py
   │     │        │  │  ├─ npyio.pyi
   │     │        │  │  ├─ recfunctions.py
   │     │        │  │  ├─ recfunctions.pyi
   │     │        │  │  ├─ scimath.py
   │     │        │  │  ├─ scimath.pyi
   │     │        │  │  ├─ stride_tricks.py
   │     │        │  │  ├─ stride_tricks.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__datasource.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__iotools.cpython-312.pyc
   │     │        │  │  │  │  ├─ test__version.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_array_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraypad.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arraysetops.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayterator.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_format.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_function_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_histograms.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_index_tricks.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_io.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_loadtxt.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mixins.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_nanfunctions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_packbits.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_polynomial.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_recfunctions.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_shape_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_stride_tricks.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_twodim_base.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_type_check.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_ufunclike.cpython-312.pyc
   │     │        │  │  │  │  └─ test_utils.cpython-312.pyc
   │     │        │  │  │  ├─ data
   │     │        │  │  │  │  ├─ py2-np0-objarr.npy
   │     │        │  │  │  │  ├─ py2-objarr.npy
   │     │        │  │  │  │  ├─ py2-objarr.npz
   │     │        │  │  │  │  ├─ py3-objarr.npy
   │     │        │  │  │  │  ├─ py3-objarr.npz
   │     │        │  │  │  │  ├─ python3.npy
   │     │        │  │  │  │  └─ win64python2.npy
   │     │        │  │  │  ├─ test__datasource.py
   │     │        │  │  │  ├─ test__iotools.py
   │     │        │  │  │  ├─ test__version.py
   │     │        │  │  │  ├─ test_array_utils.py
   │     │        │  │  │  ├─ test_arraypad.py
   │     │        │  │  │  ├─ test_arraysetops.py
   │     │        │  │  │  ├─ test_arrayterator.py
   │     │        │  │  │  ├─ test_format.py
   │     │        │  │  │  ├─ test_function_base.py
   │     │        │  │  │  ├─ test_histograms.py
   │     │        │  │  │  ├─ test_index_tricks.py
   │     │        │  │  │  ├─ test_io.py
   │     │        │  │  │  ├─ test_loadtxt.py
   │     │        │  │  │  ├─ test_mixins.py
   │     │        │  │  │  ├─ test_nanfunctions.py
   │     │        │  │  │  ├─ test_packbits.py
   │     │        │  │  │  ├─ test_polynomial.py
   │     │        │  │  │  ├─ test_recfunctions.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  ├─ test_shape_base.py
   │     │        │  │  │  ├─ test_stride_tricks.py
   │     │        │  │  │  ├─ test_twodim_base.py
   │     │        │  │  │  ├─ test_type_check.py
   │     │        │  │  │  ├─ test_ufunclike.py
   │     │        │  │  │  └─ test_utils.py
   │     │        │  │  ├─ user_array.py
   │     │        │  │  └─ user_array.pyi
   │     │        │  ├─ linalg
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _linalg.cpython-312.pyc
   │     │        │  │  ├─ _linalg.py
   │     │        │  │  ├─ _linalg.pyi
   │     │        │  │  ├─ _umath_linalg.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _umath_linalg.pyi
   │     │        │  │  ├─ lapack_lite.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ lapack_lite.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │     │  ├─ test_linalg.cpython-312.pyc
   │     │        │  │     │  └─ test_regression.cpython-312.pyc
   │     │        │  │     ├─ test_deprecations.py
   │     │        │  │     ├─ test_linalg.py
   │     │        │  │     └─ test_regression.py
   │     │        │  ├─ ma
   │     │        │  │  ├─ API_CHANGES.txt
   │     │        │  │  ├─ LICENSE
   │     │        │  │  ├─ README.rst
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  ├─ extras.cpython-312.pyc
   │     │        │  │  │  ├─ mrecords.cpython-312.pyc
   │     │        │  │  │  └─ testutils.cpython-312.pyc
   │     │        │  │  ├─ core.py
   │     │        │  │  ├─ core.pyi
   │     │        │  │  ├─ extras.py
   │     │        │  │  ├─ extras.pyi
   │     │        │  │  ├─ mrecords.py
   │     │        │  │  ├─ mrecords.pyi
   │     │        │  │  ├─ tests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_arrayobject.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_core.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_deprecations.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_extras.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_mrecords.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_old_ma.cpython-312.pyc
   │     │        │  │  │  │  ├─ test_regression.cpython-312.pyc
   │     │        │  │  │  │  └─ test_subclassing.cpython-312.pyc
   │     │        │  │  │  ├─ test_arrayobject.py
   │     │        │  │  │  ├─ test_core.py
   │     │        │  │  │  ├─ test_deprecations.py
   │     │        │  │  │  ├─ test_extras.py
   │     │        │  │  │  ├─ test_mrecords.py
   │     │        │  │  │  ├─ test_old_ma.py
   │     │        │  │  │  ├─ test_regression.py
   │     │        │  │  │  └─ test_subclassing.py
   │     │        │  │  ├─ testutils.py
   │     │        │  │  └─ testutils.pyi
   │     │        │  ├─ matlib.py
   │     │        │  ├─ matlib.pyi
   │     │        │  ├─ matrixlib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ defmatrix.cpython-312.pyc
   │     │        │  │  ├─ defmatrix.py
   │     │        │  │  ├─ defmatrix.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_defmatrix.cpython-312.pyc
   │     │        │  │     │  ├─ test_interaction.cpython-312.pyc
   │     │        │  │     │  ├─ test_masked_matrix.cpython-312.pyc
   │     │        │  │     │  ├─ test_matrix_linalg.cpython-312.pyc
   │     │        │  │     │  ├─ test_multiarray.cpython-312.pyc
   │     │        │  │     │  ├─ test_numeric.cpython-312.pyc
   │     │        │  │     │  └─ test_regression.cpython-312.pyc
   │     │        │  │     ├─ test_defmatrix.py
   │     │        │  │     ├─ test_interaction.py
   │     │        │  │     ├─ test_masked_matrix.py
   │     │        │  │     ├─ test_matrix_linalg.py
   │     │        │  │     ├─ test_multiarray.py
   │     │        │  │     ├─ test_numeric.py
   │     │        │  │     └─ test_regression.py
   │     │        │  ├─ polynomial
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _polybase.cpython-312.pyc
   │     │        │  │  │  ├─ chebyshev.cpython-312.pyc
   │     │        │  │  │  ├─ hermite.cpython-312.pyc
   │     │        │  │  │  ├─ hermite_e.cpython-312.pyc
   │     │        │  │  │  ├─ laguerre.cpython-312.pyc
   │     │        │  │  │  ├─ legendre.cpython-312.pyc
   │     │        │  │  │  ├─ polynomial.cpython-312.pyc
   │     │        │  │  │  └─ polyutils.cpython-312.pyc
   │     │        │  │  ├─ _polybase.py
   │     │        │  │  ├─ _polybase.pyi
   │     │        │  │  ├─ _polytypes.pyi
   │     │        │  │  ├─ chebyshev.py
   │     │        │  │  ├─ chebyshev.pyi
   │     │        │  │  ├─ hermite.py
   │     │        │  │  ├─ hermite.pyi
   │     │        │  │  ├─ hermite_e.py
   │     │        │  │  ├─ hermite_e.pyi
   │     │        │  │  ├─ laguerre.py
   │     │        │  │  ├─ laguerre.pyi
   │     │        │  │  ├─ legendre.py
   │     │        │  │  ├─ legendre.pyi
   │     │        │  │  ├─ polynomial.py
   │     │        │  │  ├─ polynomial.pyi
   │     │        │  │  ├─ polyutils.py
   │     │        │  │  ├─ polyutils.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_chebyshev.cpython-312.pyc
   │     │        │  │     │  ├─ test_classes.cpython-312.pyc
   │     │        │  │     │  ├─ test_hermite.cpython-312.pyc
   │     │        │  │     │  ├─ test_hermite_e.cpython-312.pyc
   │     │        │  │     │  ├─ test_laguerre.cpython-312.pyc
   │     │        │  │     │  ├─ test_legendre.cpython-312.pyc
   │     │        │  │     │  ├─ test_polynomial.cpython-312.pyc
   │     │        │  │     │  ├─ test_polyutils.cpython-312.pyc
   │     │        │  │     │  ├─ test_printing.cpython-312.pyc
   │     │        │  │     │  └─ test_symbol.cpython-312.pyc
   │     │        │  │     ├─ test_chebyshev.py
   │     │        │  │     ├─ test_classes.py
   │     │        │  │     ├─ test_hermite.py
   │     │        │  │     ├─ test_hermite_e.py
   │     │        │  │     ├─ test_laguerre.py
   │     │        │  │     ├─ test_legendre.py
   │     │        │  │     ├─ test_polynomial.py
   │     │        │  │     ├─ test_polyutils.py
   │     │        │  │     ├─ test_printing.py
   │     │        │  │     └─ test_symbol.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ random
   │     │        │  │  ├─ LICENSE.md
   │     │        │  │  ├─ __init__.pxd
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ _pickle.cpython-312.pyc
   │     │        │  │  ├─ _bounded_integers.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _bounded_integers.pxd
   │     │        │  │  ├─ _bounded_integers.pyi
   │     │        │  │  ├─ _common.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _common.pxd
   │     │        │  │  ├─ _common.pyi
   │     │        │  │  ├─ _examples
   │     │        │  │  │  ├─ cffi
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ extending.cpython-312.pyc
   │     │        │  │  │  │  │  └─ parse.cpython-312.pyc
   │     │        │  │  │  │  ├─ extending.py
   │     │        │  │  │  │  └─ parse.py
   │     │        │  │  │  ├─ cython
   │     │        │  │  │  │  ├─ extending.pyx
   │     │        │  │  │  │  ├─ extending_distributions.pyx
   │     │        │  │  │  │  └─ meson.build
   │     │        │  │  │  └─ numba
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ extending.cpython-312.pyc
   │     │        │  │  │     │  └─ extending_distributions.cpython-312.pyc
   │     │        │  │  │     ├─ extending.py
   │     │        │  │  │     └─ extending_distributions.py
   │     │        │  │  ├─ _generator.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _generator.pyi
   │     │        │  │  ├─ _mt19937.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _mt19937.pyi
   │     │        │  │  ├─ _pcg64.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _pcg64.pyi
   │     │        │  │  ├─ _philox.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _philox.pyi
   │     │        │  │  ├─ _pickle.py
   │     │        │  │  ├─ _pickle.pyi
   │     │        │  │  ├─ _sfc64.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ _sfc64.pyi
   │     │        │  │  ├─ bit_generator.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ bit_generator.pxd
   │     │        │  │  ├─ bit_generator.pyi
   │     │        │  │  ├─ c_distributions.pxd
   │     │        │  │  ├─ lib
   │     │        │  │  │  └─ libnpyrandom.a
   │     │        │  │  ├─ mtrand.cpython-312-x86_64-linux-gnu.so
   │     │        │  │  ├─ mtrand.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_direct.cpython-312.pyc
   │     │        │  │     │  ├─ test_extending.cpython-312.pyc
   │     │        │  │     │  ├─ test_generator_mt19937.cpython-312.pyc
   │     │        │  │     │  ├─ test_generator_mt19937_regressions.cpython-312.pyc
   │     │        │  │     │  ├─ test_random.cpython-312.pyc
   │     │        │  │     │  ├─ test_randomstate.cpython-312.pyc
   │     │        │  │     │  ├─ test_randomstate_regression.cpython-312.pyc
   │     │        │  │     │  ├─ test_regression.cpython-312.pyc
   │     │        │  │     │  ├─ test_seed_sequence.cpython-312.pyc
   │     │        │  │     │  └─ test_smoke.cpython-312.pyc
   │     │        │  │     ├─ data
   │     │        │  │     │  ├─ __init__.py
   │     │        │  │     │  ├─ __pycache__
   │     │        │  │     │  │  └─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ generator_pcg64_np121.pkl.gz
   │     │        │  │     │  ├─ generator_pcg64_np126.pkl.gz
   │     │        │  │     │  ├─ mt19937-testset-1.csv
   │     │        │  │     │  ├─ mt19937-testset-2.csv
   │     │        │  │     │  ├─ pcg64-testset-1.csv
   │     │        │  │     │  ├─ pcg64-testset-2.csv
   │     │        │  │     │  ├─ pcg64dxsm-testset-1.csv
   │     │        │  │     │  ├─ pcg64dxsm-testset-2.csv
   │     │        │  │     │  ├─ philox-testset-1.csv
   │     │        │  │     │  ├─ philox-testset-2.csv
   │     │        │  │     │  ├─ sfc64-testset-1.csv
   │     │        │  │     │  ├─ sfc64-testset-2.csv
   │     │        │  │     │  └─ sfc64_np126.pkl.gz
   │     │        │  │     ├─ test_direct.py
   │     │        │  │     ├─ test_extending.py
   │     │        │  │     ├─ test_generator_mt19937.py
   │     │        │  │     ├─ test_generator_mt19937_regressions.py
   │     │        │  │     ├─ test_random.py
   │     │        │  │     ├─ test_randomstate.py
   │     │        │  │     ├─ test_randomstate_regression.py
   │     │        │  │     ├─ test_regression.py
   │     │        │  │     ├─ test_seed_sequence.py
   │     │        │  │     └─ test_smoke.py
   │     │        │  ├─ rec
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ strings
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  └─ __pycache__
   │     │        │  │     └─ __init__.cpython-312.pyc
   │     │        │  ├─ testing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ overrides.cpython-312.pyc
   │     │        │  │  │  └─ print_coercion_tables.cpython-312.pyc
   │     │        │  │  ├─ _private
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __init__.pyi
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ extbuild.cpython-312.pyc
   │     │        │  │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ extbuild.py
   │     │        │  │  │  ├─ extbuild.pyi
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ utils.pyi
   │     │        │  │  ├─ overrides.py
   │     │        │  │  ├─ overrides.pyi
   │     │        │  │  ├─ print_coercion_tables.py
   │     │        │  │  ├─ print_coercion_tables.pyi
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  └─ test_utils.cpython-312.pyc
   │     │        │  │     └─ test_utils.py
   │     │        │  ├─ tests
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ test__all__.cpython-312.pyc
   │     │        │  │  │  ├─ test_configtool.cpython-312.pyc
   │     │        │  │  │  ├─ test_ctypeslib.cpython-312.pyc
   │     │        │  │  │  ├─ test_lazyloading.cpython-312.pyc
   │     │        │  │  │  ├─ test_matlib.cpython-312.pyc
   │     │        │  │  │  ├─ test_numpy_config.cpython-312.pyc
   │     │        │  │  │  ├─ test_numpy_version.cpython-312.pyc
   │     │        │  │  │  ├─ test_public_api.cpython-312.pyc
   │     │        │  │  │  ├─ test_reloading.cpython-312.pyc
   │     │        │  │  │  ├─ test_scripts.cpython-312.pyc
   │     │        │  │  │  └─ test_warnings.cpython-312.pyc
   │     │        │  │  ├─ test__all__.py
   │     │        │  │  ├─ test_configtool.py
   │     │        │  │  ├─ test_ctypeslib.py
   │     │        │  │  ├─ test_lazyloading.py
   │     │        │  │  ├─ test_matlib.py
   │     │        │  │  ├─ test_numpy_config.py
   │     │        │  │  ├─ test_numpy_version.py
   │     │        │  │  ├─ test_public_api.py
   │     │        │  │  ├─ test_reloading.py
   │     │        │  │  ├─ test_scripts.py
   │     │        │  │  └─ test_warnings.py
   │     │        │  ├─ typing
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __init__.pyi
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ mypy_plugin.cpython-312.pyc
   │     │        │  │  ├─ mypy_plugin.py
   │     │        │  │  └─ tests
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ test_isfile.cpython-312.pyc
   │     │        │  │     │  ├─ test_runtime.cpython-312.pyc
   │     │        │  │     │  └─ test_typing.cpython-312.pyc
   │     │        │  │     ├─ data
   │     │        │  │     │  ├─ fail
   │     │        │  │     │  │  ├─ arithmetic.pyi
   │     │        │  │     │  │  ├─ array_constructors.pyi
   │     │        │  │     │  │  ├─ array_like.pyi
   │     │        │  │     │  │  ├─ array_pad.pyi
   │     │        │  │     │  │  ├─ arrayprint.pyi
   │     │        │  │     │  │  ├─ arrayterator.pyi
   │     │        │  │     │  │  ├─ bitwise_ops.pyi
   │     │        │  │     │  │  ├─ char.pyi
   │     │        │  │     │  │  ├─ chararray.pyi
   │     │        │  │     │  │  ├─ comparisons.pyi
   │     │        │  │     │  │  ├─ constants.pyi
   │     │        │  │     │  │  ├─ datasource.pyi
   │     │        │  │     │  │  ├─ dtype.pyi
   │     │        │  │     │  │  ├─ einsumfunc.pyi
   │     │        │  │     │  │  ├─ flatiter.pyi
   │     │        │  │     │  │  ├─ fromnumeric.pyi
   │     │        │  │     │  │  ├─ histograms.pyi
   │     │        │  │     │  │  ├─ index_tricks.pyi
   │     │        │  │     │  │  ├─ lib_function_base.pyi
   │     │        │  │     │  │  ├─ lib_polynomial.pyi
   │     │        │  │     │  │  ├─ lib_utils.pyi
   │     │        │  │     │  │  ├─ lib_version.pyi
   │     │        │  │     │  │  ├─ linalg.pyi
   │     │        │  │     │  │  ├─ ma.pyi
   │     │        │  │     │  │  ├─ memmap.pyi
   │     │        │  │     │  │  ├─ modules.pyi
   │     │        │  │     │  │  ├─ multiarray.pyi
   │     │        │  │     │  │  ├─ ndarray.pyi
   │     │        │  │     │  │  ├─ ndarray_misc.pyi
   │     │        │  │     │  │  ├─ nditer.pyi
   │     │        │  │     │  │  ├─ nested_sequence.pyi
   │     │        │  │     │  │  ├─ npyio.pyi
   │     │        │  │     │  │  ├─ numerictypes.pyi
   │     │        │  │     │  │  ├─ random.pyi
   │     │        │  │     │  │  ├─ rec.pyi
   │     │        │  │     │  │  ├─ scalars.pyi
   │     │        │  │     │  │  ├─ shape.pyi
   │     │        │  │     │  │  ├─ shape_base.pyi
   │     │        │  │     │  │  ├─ stride_tricks.pyi
   │     │        │  │     │  │  ├─ strings.pyi
   │     │        │  │     │  │  ├─ testing.pyi
   │     │        │  │     │  │  ├─ twodim_base.pyi
   │     │        │  │     │  │  ├─ type_check.pyi
   │     │        │  │     │  │  ├─ ufunc_config.pyi
   │     │        │  │     │  │  ├─ ufunclike.pyi
   │     │        │  │     │  │  ├─ ufuncs.pyi
   │     │        │  │     │  │  └─ warnings_and_errors.pyi
   │     │        │  │     │  ├─ misc
   │     │        │  │     │  │  └─ extended_precision.pyi
   │     │        │  │     │  ├─ mypy.ini
   │     │        │  │     │  ├─ pass
   │     │        │  │     │  │  ├─ __pycache__
   │     │        │  │     │  │  │  ├─ arithmetic.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ array_constructors.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ array_like.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ arrayprint.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ arrayterator.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ bitwise_ops.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ comparisons.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ dtype.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ einsumfunc.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ flatiter.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ fromnumeric.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ index_tricks.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_user_array.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_utils.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ lib_version.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ literal.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ma.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ mod.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ modules.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ multiarray.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_conversion.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_misc.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ndarray_shape_manipulation.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ nditer.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ numeric.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ numerictypes.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ random.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ recfunctions.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ scalars.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ shape.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ simple.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufunc_config.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufunclike.cpython-312.pyc
   │     │        │  │     │  │  │  ├─ ufuncs.cpython-312.pyc
   │     │        │  │     │  │  │  └─ warnings_and_errors.cpython-312.pyc
   │     │        │  │     │  │  ├─ arithmetic.py
   │     │        │  │     │  │  ├─ array_constructors.py
   │     │        │  │     │  │  ├─ array_like.py
   │     │        │  │     │  │  ├─ arrayprint.py
   │     │        │  │     │  │  ├─ arrayterator.py
   │     │        │  │     │  │  ├─ bitwise_ops.py
   │     │        │  │     │  │  ├─ comparisons.py
   │     │        │  │     │  │  ├─ dtype.py
   │     │        │  │     │  │  ├─ einsumfunc.py
   │     │        │  │     │  │  ├─ flatiter.py
   │     │        │  │     │  │  ├─ fromnumeric.py
   │     │        │  │     │  │  ├─ index_tricks.py
   │     │        │  │     │  │  ├─ lib_user_array.py
   │     │        │  │     │  │  ├─ lib_utils.py
   │     │        │  │     │  │  ├─ lib_version.py
   │     │        │  │     │  │  ├─ literal.py
   │     │        │  │     │  │  ├─ ma.py
   │     │        │  │     │  │  ├─ mod.py
   │     │        │  │     │  │  ├─ modules.py
   │     │        │  │     │  │  ├─ multiarray.py
   │     │        │  │     │  │  ├─ ndarray_conversion.py
   │     │        │  │     │  │  ├─ ndarray_misc.py
   │     │        │  │     │  │  ├─ ndarray_shape_manipulation.py
   │     │        │  │     │  │  ├─ nditer.py
   │     │        │  │     │  │  ├─ numeric.py
   │     │        │  │     │  │  ├─ numerictypes.py
   │     │        │  │     │  │  ├─ random.py
   │     │        │  │     │  │  ├─ recfunctions.py
   │     │        │  │     │  │  ├─ scalars.py
   │     │        │  │     │  │  ├─ shape.py
   │     │        │  │     │  │  ├─ simple.py
   │     │        │  │     │  │  ├─ ufunc_config.py
   │     │        │  │     │  │  ├─ ufunclike.py
   │     │        │  │     │  │  ├─ ufuncs.py
   │     │        │  │     │  │  └─ warnings_and_errors.py
   │     │        │  │     │  └─ reveal
   │     │        │  │     │     ├─ arithmetic.pyi
   │     │        │  │     │     ├─ array_api_info.pyi
   │     │        │  │     │     ├─ array_constructors.pyi
   │     │        │  │     │     ├─ arraypad.pyi
   │     │        │  │     │     ├─ arrayprint.pyi
   │     │        │  │     │     ├─ arraysetops.pyi
   │     │        │  │     │     ├─ arrayterator.pyi
   │     │        │  │     │     ├─ bitwise_ops.pyi
   │     │        │  │     │     ├─ char.pyi
   │     │        │  │     │     ├─ chararray.pyi
   │     │        │  │     │     ├─ comparisons.pyi
   │     │        │  │     │     ├─ constants.pyi
   │     │        │  │     │     ├─ ctypeslib.pyi
   │     │        │  │     │     ├─ datasource.pyi
   │     │        │  │     │     ├─ dtype.pyi
   │     │        │  │     │     ├─ einsumfunc.pyi
   │     │        │  │     │     ├─ emath.pyi
   │     │        │  │     │     ├─ fft.pyi
   │     │        │  │     │     ├─ flatiter.pyi
   │     │        │  │     │     ├─ fromnumeric.pyi
   │     │        │  │     │     ├─ getlimits.pyi
   │     │        │  │     │     ├─ histograms.pyi
   │     │        │  │     │     ├─ index_tricks.pyi
   │     │        │  │     │     ├─ lib_function_base.pyi
   │     │        │  │     │     ├─ lib_polynomial.pyi
   │     │        │  │     │     ├─ lib_utils.pyi
   │     │        │  │     │     ├─ lib_version.pyi
   │     │        │  │     │     ├─ linalg.pyi
   │     │        │  │     │     ├─ ma.pyi
   │     │        │  │     │     ├─ matrix.pyi
   │     │        │  │     │     ├─ memmap.pyi
   │     │        │  │     │     ├─ mod.pyi
   │     │        │  │     │     ├─ modules.pyi
   │     │        │  │     │     ├─ multiarray.pyi
   │     │        │  │     │     ├─ nbit_base_example.pyi
   │     │        │  │     │     ├─ ndarray_assignability.pyi
   │     │        │  │     │     ├─ ndarray_conversion.pyi
   │     │        │  │     │     ├─ ndarray_misc.pyi
   │     │        │  │     │     ├─ ndarray_shape_manipulation.pyi
   │     │        │  │     │     ├─ nditer.pyi
   │     │        │  │     │     ├─ nested_sequence.pyi
   │     │        │  │     │     ├─ npyio.pyi
   │     │        │  │     │     ├─ numeric.pyi
   │     │        │  │     │     ├─ numerictypes.pyi
   │     │        │  │     │     ├─ polynomial_polybase.pyi
   │     │        │  │     │     ├─ polynomial_polyutils.pyi
   │     │        │  │     │     ├─ polynomial_series.pyi
   │     │        │  │     │     ├─ random.pyi
   │     │        │  │     │     ├─ rec.pyi
   │     │        │  │     │     ├─ scalars.pyi
   │     │        │  │     │     ├─ shape.pyi
   │     │        │  │     │     ├─ shape_base.pyi
   │     │        │  │     │     ├─ stride_tricks.pyi
   │     │        │  │     │     ├─ strings.pyi
   │     │        │  │     │     ├─ testing.pyi
   │     │        │  │     │     ├─ twodim_base.pyi
   │     │        │  │     │     ├─ type_check.pyi
   │     │        │  │     │     ├─ ufunc_config.pyi
   │     │        │  │     │     ├─ ufunclike.pyi
   │     │        │  │     │     ├─ ufuncs.pyi
   │     │        │  │     │     └─ warnings_and_errors.pyi
   │     │        │  │     ├─ test_isfile.py
   │     │        │  │     ├─ test_runtime.py
   │     │        │  │     └─ test_typing.py
   │     │        │  ├─ version.py
   │     │        │  └─ version.pyi
   │     │        ├─ numpy-2.4.6.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ licenses
   │     │        │     ├─ LICENSE.txt
   │     │        │     └─ numpy
   │     │        │        ├─ _core
   │     │        │        │  ├─ include
   │     │        │        │  │  └─ numpy
   │     │        │        │  │     └─ libdivide
   │     │        │        │  │        └─ LICENSE.txt
   │     │        │        │  └─ src
   │     │        │        │     ├─ common
   │     │        │        │     │  └─ pythoncapi-compat
   │     │        │        │     │     └─ COPYING
   │     │        │        │     ├─ highway
   │     │        │        │     │  └─ LICENSE
   │     │        │        │     ├─ multiarray
   │     │        │        │     │  └─ dragon4_LICENSE.txt
   │     │        │        │     ├─ npysort
   │     │        │        │     │  └─ x86-simd-sort
   │     │        │        │     │     └─ LICENSE.md
   │     │        │        │     └─ umath
   │     │        │        │        └─ svml
   │     │        │        │           └─ LICENSE
   │     │        │        ├─ fft
   │     │        │        │  └─ pocketfft
   │     │        │        │     └─ LICENSE.md
   │     │        │        ├─ linalg
   │     │        │        │  └─ lapack_lite
   │     │        │        │     └─ LICENSE.txt
   │     │        │        ├─ ma
   │     │        │        │  └─ LICENSE
   │     │        │        └─ random
   │     │        │           ├─ LICENSE.md
   │     │        │           └─ src
   │     │        │              ├─ distributions
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ mt19937
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ pcg64
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ philox
   │     │        │              │  └─ LICENSE.md
   │     │        │              ├─ sfc64
   │     │        │              │  └─ LICENSE.md
   │     │        │              └─ splitmix64
   │     │        │                 └─ LICENSE.md
   │     │        ├─ numpy.libs
   │     │        │  ├─ libgfortran-040039e1-0352e75f.so.5.0.0
   │     │        │  ├─ libquadmath-96973f99-934c22de.so.0.0.0
   │     │        │  └─ libscipy_openblas64_-32a4b2a6.so
   │     │        ├─ pip
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pip-runner__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  └─ __pip-runner__.cpython-312.pyc
   │     │        │  ├─ _internal
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ build_env.cpython-312.pyc
   │     │        │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  ├─ configuration.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  ├─ pyproject.cpython-312.pyc
   │     │        │  │  │  ├─ self_outdated_check.cpython-312.pyc
   │     │        │  │  │  └─ wheel_builder.cpython-312.pyc
   │     │        │  │  ├─ build_env.py
   │     │        │  │  ├─ cache.py
   │     │        │  │  ├─ cli
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ autocompletion.cpython-312.pyc
   │     │        │  │  │  │  ├─ base_command.cpython-312.pyc
   │     │        │  │  │  │  ├─ cmdoptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ command_context.cpython-312.pyc
   │     │        │  │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  │  ├─ main_parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress_bars.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_command.cpython-312.pyc
   │     │        │  │  │  │  ├─ spinners.cpython-312.pyc
   │     │        │  │  │  │  └─ status_codes.cpython-312.pyc
   │     │        │  │  │  ├─ autocompletion.py
   │     │        │  │  │  ├─ base_command.py
   │     │        │  │  │  ├─ cmdoptions.py
   │     │        │  │  │  ├─ command_context.py
   │     │        │  │  │  ├─ main.py
   │     │        │  │  │  ├─ main_parser.py
   │     │        │  │  │  ├─ parser.py
   │     │        │  │  │  ├─ progress_bars.py
   │     │        │  │  │  ├─ req_command.py
   │     │        │  │  │  ├─ spinners.py
   │     │        │  │  │  └─ status_codes.py
   │     │        │  │  ├─ commands
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ check.cpython-312.pyc
   │     │        │  │  │  │  ├─ completion.cpython-312.pyc
   │     │        │  │  │  │  ├─ configuration.cpython-312.pyc
   │     │        │  │  │  │  ├─ debug.cpython-312.pyc
   │     │        │  │  │  │  ├─ download.cpython-312.pyc
   │     │        │  │  │  │  ├─ freeze.cpython-312.pyc
   │     │        │  │  │  │  ├─ hash.cpython-312.pyc
   │     │        │  │  │  │  ├─ help.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ inspect.cpython-312.pyc
   │     │        │  │  │  │  ├─ install.cpython-312.pyc
   │     │        │  │  │  │  ├─ list.cpython-312.pyc
   │     │        │  │  │  │  ├─ search.cpython-312.pyc
   │     │        │  │  │  │  ├─ show.cpython-312.pyc
   │     │        │  │  │  │  ├─ uninstall.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ check.py
   │     │        │  │  │  ├─ completion.py
   │     │        │  │  │  ├─ configuration.py
   │     │        │  │  │  ├─ debug.py
   │     │        │  │  │  ├─ download.py
   │     │        │  │  │  ├─ freeze.py
   │     │        │  │  │  ├─ hash.py
   │     │        │  │  │  ├─ help.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ inspect.py
   │     │        │  │  │  ├─ install.py
   │     │        │  │  │  ├─ list.py
   │     │        │  │  │  ├─ search.py
   │     │        │  │  │  ├─ show.py
   │     │        │  │  │  ├─ uninstall.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ configuration.py
   │     │        │  │  ├─ distributions
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  │  ├─ installed.cpython-312.pyc
   │     │        │  │  │  │  ├─ sdist.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ installed.py
   │     │        │  │  │  ├─ sdist.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ exceptions.py
   │     │        │  │  ├─ index
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ collector.cpython-312.pyc
   │     │        │  │  │  │  ├─ package_finder.cpython-312.pyc
   │     │        │  │  │  │  └─ sources.cpython-312.pyc
   │     │        │  │  │  ├─ collector.py
   │     │        │  │  │  ├─ package_finder.py
   │     │        │  │  │  └─ sources.py
   │     │        │  │  ├─ locations
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _distutils.cpython-312.pyc
   │     │        │  │  │  │  ├─ _sysconfig.cpython-312.pyc
   │     │        │  │  │  │  └─ base.cpython-312.pyc
   │     │        │  │  │  ├─ _distutils.py
   │     │        │  │  │  ├─ _sysconfig.py
   │     │        │  │  │  └─ base.py
   │     │        │  │  ├─ main.py
   │     │        │  │  ├─ metadata
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _json.cpython-312.pyc
   │     │        │  │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  │  └─ pkg_resources.cpython-312.pyc
   │     │        │  │  │  ├─ _json.py
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ importlib
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _dists.cpython-312.pyc
   │     │        │  │  │  │  │  └─ _envs.cpython-312.pyc
   │     │        │  │  │  │  ├─ _compat.py
   │     │        │  │  │  │  ├─ _dists.py
   │     │        │  │  │  │  └─ _envs.py
   │     │        │  │  │  └─ pkg_resources.py
   │     │        │  │  ├─ models
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ candidate.cpython-312.pyc
   │     │        │  │  │  │  ├─ direct_url.cpython-312.pyc
   │     │        │  │  │  │  ├─ format_control.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ installation_report.cpython-312.pyc
   │     │        │  │  │  │  ├─ link.cpython-312.pyc
   │     │        │  │  │  │  ├─ scheme.cpython-312.pyc
   │     │        │  │  │  │  ├─ search_scope.cpython-312.pyc
   │     │        │  │  │  │  ├─ selection_prefs.cpython-312.pyc
   │     │        │  │  │  │  ├─ target_python.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ candidate.py
   │     │        │  │  │  ├─ direct_url.py
   │     │        │  │  │  ├─ format_control.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ installation_report.py
   │     │        │  │  │  ├─ link.py
   │     │        │  │  │  ├─ scheme.py
   │     │        │  │  │  ├─ search_scope.py
   │     │        │  │  │  ├─ selection_prefs.py
   │     │        │  │  │  ├─ target_python.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ network
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ download.cpython-312.pyc
   │     │        │  │  │  │  ├─ lazy_wheel.cpython-312.pyc
   │     │        │  │  │  │  ├─ session.cpython-312.pyc
   │     │        │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  └─ xmlrpc.cpython-312.pyc
   │     │        │  │  │  ├─ auth.py
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ download.py
   │     │        │  │  │  ├─ lazy_wheel.py
   │     │        │  │  │  ├─ session.py
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ xmlrpc.py
   │     │        │  │  ├─ operations
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ check.cpython-312.pyc
   │     │        │  │  │  │  ├─ freeze.cpython-312.pyc
   │     │        │  │  │  │  └─ prepare.cpython-312.pyc
   │     │        │  │  │  ├─ build
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ build_tracker.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata_editable.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ metadata_legacy.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ wheel.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ wheel_editable.cpython-312.pyc
   │     │        │  │  │  │  │  └─ wheel_legacy.cpython-312.pyc
   │     │        │  │  │  │  ├─ build_tracker.py
   │     │        │  │  │  │  ├─ metadata.py
   │     │        │  │  │  │  ├─ metadata_editable.py
   │     │        │  │  │  │  ├─ metadata_legacy.py
   │     │        │  │  │  │  ├─ wheel.py
   │     │        │  │  │  │  ├─ wheel_editable.py
   │     │        │  │  │  │  └─ wheel_legacy.py
   │     │        │  │  │  ├─ check.py
   │     │        │  │  │  ├─ freeze.py
   │     │        │  │  │  ├─ install
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ editable_legacy.cpython-312.pyc
   │     │        │  │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  │  ├─ editable_legacy.py
   │     │        │  │  │  │  └─ wheel.py
   │     │        │  │  │  └─ prepare.py
   │     │        │  │  ├─ pyproject.py
   │     │        │  │  ├─ req
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ constructors.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_file.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_install.cpython-312.pyc
   │     │        │  │  │  │  ├─ req_set.cpython-312.pyc
   │     │        │  │  │  │  └─ req_uninstall.cpython-312.pyc
   │     │        │  │  │  ├─ constructors.py
   │     │        │  │  │  ├─ req_file.py
   │     │        │  │  │  ├─ req_install.py
   │     │        │  │  │  ├─ req_set.py
   │     │        │  │  │  └─ req_uninstall.py
   │     │        │  │  ├─ resolution
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  └─ base.cpython-312.pyc
   │     │        │  │  │  ├─ base.py
   │     │        │  │  │  ├─ legacy
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ resolver.cpython-312.pyc
   │     │        │  │  │  │  └─ resolver.py
   │     │        │  │  │  └─ resolvelib
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  ├─ base.cpython-312.pyc
   │     │        │  │  │     │  ├─ candidates.cpython-312.pyc
   │     │        │  │  │     │  ├─ factory.cpython-312.pyc
   │     │        │  │  │     │  ├─ found_candidates.cpython-312.pyc
   │     │        │  │  │     │  ├─ provider.cpython-312.pyc
   │     │        │  │  │     │  ├─ reporter.cpython-312.pyc
   │     │        │  │  │     │  ├─ requirements.cpython-312.pyc
   │     │        │  │  │     │  └─ resolver.cpython-312.pyc
   │     │        │  │  │     ├─ base.py
   │     │        │  │  │     ├─ candidates.py
   │     │        │  │  │     ├─ factory.py
   │     │        │  │  │     ├─ found_candidates.py
   │     │        │  │  │     ├─ provider.py
   │     │        │  │  │     ├─ reporter.py
   │     │        │  │  │     ├─ requirements.py
   │     │        │  │  │     └─ resolver.py
   │     │        │  │  ├─ self_outdated_check.py
   │     │        │  │  ├─ utils
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _jaraco_text.cpython-312.pyc
   │     │        │  │  │  │  ├─ _log.cpython-312.pyc
   │     │        │  │  │  │  ├─ appdirs.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ compatibility_tags.cpython-312.pyc
   │     │        │  │  │  │  ├─ datetime.cpython-312.pyc
   │     │        │  │  │  │  ├─ deprecation.cpython-312.pyc
   │     │        │  │  │  │  ├─ direct_url_helpers.cpython-312.pyc
   │     │        │  │  │  │  ├─ egg_link.cpython-312.pyc
   │     │        │  │  │  │  ├─ encoding.cpython-312.pyc
   │     │        │  │  │  │  ├─ entrypoints.cpython-312.pyc
   │     │        │  │  │  │  ├─ filesystem.cpython-312.pyc
   │     │        │  │  │  │  ├─ filetypes.cpython-312.pyc
   │     │        │  │  │  │  ├─ glibc.cpython-312.pyc
   │     │        │  │  │  │  ├─ hashes.cpython-312.pyc
   │     │        │  │  │  │  ├─ inject_securetransport.cpython-312.pyc
   │     │        │  │  │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  │  │  ├─ misc.cpython-312.pyc
   │     │        │  │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  │  ├─ packaging.cpython-312.pyc
   │     │        │  │  │  │  ├─ setuptools_build.cpython-312.pyc
   │     │        │  │  │  │  ├─ subprocess.cpython-312.pyc
   │     │        │  │  │  │  ├─ temp_dir.cpython-312.pyc
   │     │        │  │  │  │  ├─ unpacking.cpython-312.pyc
   │     │        │  │  │  │  ├─ urls.cpython-312.pyc
   │     │        │  │  │  │  ├─ virtualenv.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ _jaraco_text.py
   │     │        │  │  │  ├─ _log.py
   │     │        │  │  │  ├─ appdirs.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ compatibility_tags.py
   │     │        │  │  │  ├─ datetime.py
   │     │        │  │  │  ├─ deprecation.py
   │     │        │  │  │  ├─ direct_url_helpers.py
   │     │        │  │  │  ├─ egg_link.py
   │     │        │  │  │  ├─ encoding.py
   │     │        │  │  │  ├─ entrypoints.py
   │     │        │  │  │  ├─ filesystem.py
   │     │        │  │  │  ├─ filetypes.py
   │     │        │  │  │  ├─ glibc.py
   │     │        │  │  │  ├─ hashes.py
   │     │        │  │  │  ├─ inject_securetransport.py
   │     │        │  │  │  ├─ logging.py
   │     │        │  │  │  ├─ misc.py
   │     │        │  │  │  ├─ models.py
   │     │        │  │  │  ├─ packaging.py
   │     │        │  │  │  ├─ setuptools_build.py
   │     │        │  │  │  ├─ subprocess.py
   │     │        │  │  │  ├─ temp_dir.py
   │     │        │  │  │  ├─ unpacking.py
   │     │        │  │  │  ├─ urls.py
   │     │        │  │  │  ├─ virtualenv.py
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ vcs
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ bazaar.cpython-312.pyc
   │     │        │  │  │  │  ├─ git.cpython-312.pyc
   │     │        │  │  │  │  ├─ mercurial.cpython-312.pyc
   │     │        │  │  │  │  ├─ subversion.cpython-312.pyc
   │     │        │  │  │  │  └─ versioncontrol.cpython-312.pyc
   │     │        │  │  │  ├─ bazaar.py
   │     │        │  │  │  ├─ git.py
   │     │        │  │  │  ├─ mercurial.py
   │     │        │  │  │  ├─ subversion.py
   │     │        │  │  │  └─ versioncontrol.py
   │     │        │  │  └─ wheel_builder.py
   │     │        │  ├─ _vendor
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ six.cpython-312.pyc
   │     │        │  │  │  └─ typing_extensions.cpython-312.pyc
   │     │        │  │  ├─ cachecontrol
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _cmd.cpython-312.pyc
   │     │        │  │  │  │  ├─ adapter.cpython-312.pyc
   │     │        │  │  │  │  ├─ cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ controller.cpython-312.pyc
   │     │        │  │  │  │  ├─ filewrapper.cpython-312.pyc
   │     │        │  │  │  │  ├─ heuristics.cpython-312.pyc
   │     │        │  │  │  │  ├─ serialize.cpython-312.pyc
   │     │        │  │  │  │  └─ wrapper.cpython-312.pyc
   │     │        │  │  │  ├─ _cmd.py
   │     │        │  │  │  ├─ adapter.py
   │     │        │  │  │  ├─ cache.py
   │     │        │  │  │  ├─ caches
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ file_cache.cpython-312.pyc
   │     │        │  │  │  │  │  └─ redis_cache.cpython-312.pyc
   │     │        │  │  │  │  ├─ file_cache.py
   │     │        │  │  │  │  └─ redis_cache.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ controller.py
   │     │        │  │  │  ├─ filewrapper.py
   │     │        │  │  │  ├─ heuristics.py
   │     │        │  │  │  ├─ serialize.py
   │     │        │  │  │  └─ wrapper.py
   │     │        │  │  ├─ certifi
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  └─ core.cpython-312.pyc
   │     │        │  │  │  ├─ cacert.pem
   │     │        │  │  │  └─ core.py
   │     │        │  │  ├─ chardet
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ big5freq.cpython-312.pyc
   │     │        │  │  │  │  ├─ big5prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ chardistribution.cpython-312.pyc
   │     │        │  │  │  │  ├─ charsetgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ charsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ codingstatemachine.cpython-312.pyc
   │     │        │  │  │  │  ├─ codingstatemachinedict.cpython-312.pyc
   │     │        │  │  │  │  ├─ cp949prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ enums.cpython-312.pyc
   │     │        │  │  │  │  ├─ escprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ escsm.cpython-312.pyc
   │     │        │  │  │  │  ├─ eucjpprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ euckrfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ euckrprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ euctwfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ euctwprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ gb2312freq.cpython-312.pyc
   │     │        │  │  │  │  ├─ gb2312prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ hebrewprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ jisfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ johabfreq.cpython-312.pyc
   │     │        │  │  │  │  ├─ johabprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ jpcntx.cpython-312.pyc
   │     │        │  │  │  │  ├─ langbulgarianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langgreekmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langhebrewmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langhungarianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langrussianmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langthaimodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ langturkishmodel.cpython-312.pyc
   │     │        │  │  │  │  ├─ latin1prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ macromanprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcharsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcsgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ mbcssm.cpython-312.pyc
   │     │        │  │  │  │  ├─ resultdict.cpython-312.pyc
   │     │        │  │  │  │  ├─ sbcharsetprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ sbcsgroupprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ sjisprober.cpython-312.pyc
   │     │        │  │  │  │  ├─ universaldetector.cpython-312.pyc
   │     │        │  │  │  │  ├─ utf1632prober.cpython-312.pyc
   │     │        │  │  │  │  ├─ utf8prober.cpython-312.pyc
   │     │        │  │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  │  ├─ big5freq.py
   │     │        │  │  │  ├─ big5prober.py
   │     │        │  │  │  ├─ chardistribution.py
   │     │        │  │  │  ├─ charsetgroupprober.py
   │     │        │  │  │  ├─ charsetprober.py
   │     │        │  │  │  ├─ cli
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ chardetect.cpython-312.pyc
   │     │        │  │  │  │  └─ chardetect.py
   │     │        │  │  │  ├─ codingstatemachine.py
   │     │        │  │  │  ├─ codingstatemachinedict.py
   │     │        │  │  │  ├─ cp949prober.py
   │     │        │  │  │  ├─ enums.py
   │     │        │  │  │  ├─ escprober.py
   │     │        │  │  │  ├─ escsm.py
   │     │        │  │  │  ├─ eucjpprober.py
   │     │        │  │  │  ├─ euckrfreq.py
   │     │        │  │  │  ├─ euckrprober.py
   │     │        │  │  │  ├─ euctwfreq.py
   │     │        │  │  │  ├─ euctwprober.py
   │     │        │  │  │  ├─ gb2312freq.py
   │     │        │  │  │  ├─ gb2312prober.py
   │     │        │  │  │  ├─ hebrewprober.py
   │     │        │  │  │  ├─ jisfreq.py
   │     │        │  │  │  ├─ johabfreq.py
   │     │        │  │  │  ├─ johabprober.py
   │     │        │  │  │  ├─ jpcntx.py
   │     │        │  │  │  ├─ langbulgarianmodel.py
   │     │        │  │  │  ├─ langgreekmodel.py
   │     │        │  │  │  ├─ langhebrewmodel.py
   │     │        │  │  │  ├─ langhungarianmodel.py
   │     │        │  │  │  ├─ langrussianmodel.py
   │     │        │  │  │  ├─ langthaimodel.py
   │     │        │  │  │  ├─ langturkishmodel.py
   │     │        │  │  │  ├─ latin1prober.py
   │     │        │  │  │  ├─ macromanprober.py
   │     │        │  │  │  ├─ mbcharsetprober.py
   │     │        │  │  │  ├─ mbcsgroupprober.py
   │     │        │  │  │  ├─ mbcssm.py
   │     │        │  │  │  ├─ metadata
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ languages.cpython-312.pyc
   │     │        │  │  │  │  └─ languages.py
   │     │        │  │  │  ├─ resultdict.py
   │     │        │  │  │  ├─ sbcharsetprober.py
   │     │        │  │  │  ├─ sbcsgroupprober.py
   │     │        │  │  │  ├─ sjisprober.py
   │     │        │  │  │  ├─ universaldetector.py
   │     │        │  │  │  ├─ utf1632prober.py
   │     │        │  │  │  ├─ utf8prober.py
   │     │        │  │  │  └─ version.py
   │     │        │  │  ├─ colorama
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansitowin32.cpython-312.pyc
   │     │        │  │  │  │  ├─ initialise.cpython-312.pyc
   │     │        │  │  │  │  ├─ win32.cpython-312.pyc
   │     │        │  │  │  │  └─ winterm.cpython-312.pyc
   │     │        │  │  │  ├─ ansi.py
   │     │        │  │  │  ├─ ansitowin32.py
   │     │        │  │  │  ├─ initialise.py
   │     │        │  │  │  ├─ tests
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ansi_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ansitowin32_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ initialise_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ isatty_test.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  │  └─ winterm_test.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi_test.py
   │     │        │  │  │  │  ├─ ansitowin32_test.py
   │     │        │  │  │  │  ├─ initialise_test.py
   │     │        │  │  │  │  ├─ isatty_test.py
   │     │        │  │  │  │  ├─ utils.py
   │     │        │  │  │  │  └─ winterm_test.py
   │     │        │  │  │  ├─ win32.py
   │     │        │  │  │  └─ winterm.py
   │     │        │  │  ├─ distlib
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ database.cpython-312.pyc
   │     │        │  │  │  │  ├─ index.cpython-312.pyc
   │     │        │  │  │  │  ├─ locators.cpython-312.pyc
   │     │        │  │  │  │  ├─ manifest.cpython-312.pyc
   │     │        │  │  │  │  ├─ markers.cpython-312.pyc
   │     │        │  │  │  │  ├─ metadata.cpython-312.pyc
   │     │        │  │  │  │  ├─ resources.cpython-312.pyc
   │     │        │  │  │  │  ├─ scripts.cpython-312.pyc
   │     │        │  │  │  │  ├─ util.cpython-312.pyc
   │     │        │  │  │  │  ├─ version.cpython-312.pyc
   │     │        │  │  │  │  └─ wheel.cpython-312.pyc
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ database.py
   │     │        │  │  │  ├─ index.py
   │     │        │  │  │  ├─ locators.py
   │     │        │  │  │  ├─ manifest.py
   │     │        │  │  │  ├─ markers.py
   │     │        │  │  │  ├─ metadata.py
   │     │        │  │  │  ├─ resources.py
   │     │        │  │  │  ├─ scripts.py
   │     │        │  │  │  ├─ t32.exe
   │     │        │  │  │  ├─ t64-arm.exe
   │     │        │  │  │  ├─ t64.exe
   │     │        │  │  │  ├─ util.py
   │     │        │  │  │  ├─ version.py
   │     │        │  │  │  ├─ w32.exe
   │     │        │  │  │  ├─ w64-arm.exe
   │     │        │  │  │  ├─ w64.exe
   │     │        │  │  │  └─ wheel.py
   │     │        │  │  ├─ distro
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  └─ distro.cpython-312.pyc
   │     │        │  │  │  └─ distro.py
   │     │        │  │  ├─ idna
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ codec.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  │  ├─ idnadata.cpython-312.pyc
   │     │        │  │  │  │  ├─ intranges.cpython-312.pyc
   │     │        │  │  │  │  ├─ package_data.cpython-312.pyc
   │     │        │  │  │  │  └─ uts46data.cpython-312.pyc
   │     │        │  │  │  ├─ codec.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ core.py
   │     │        │  │  │  ├─ idnadata.py
   │     │        │  │  │  ├─ intranges.py
   │     │        │  │  │  ├─ package_data.py
   │     │        │  │  │  └─ uts46data.py
   │     │        │  │  ├─ msgpack
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ ext.cpython-312.pyc
   │     │        │  │  │  │  └─ fallback.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ ext.py
   │     │        │  │  │  └─ fallback.py
   │     │        │  │  ├─ packaging
   │     │        │  │  │  ├─ __about__.py
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __about__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _manylinux.cpython-312.pyc
   │     │        │  │  │  │  ├─ _musllinux.cpython-312.pyc
   │     │        │  │  │  │  ├─ _structures.cpython-312.pyc
   │     │        │  │  │  │  ├─ markers.cpython-312.pyc
   │     │        │  │  │  │  ├─ requirements.cpython-312.pyc
   │     │        │  │  │  │  ├─ specifiers.cpython-312.pyc
   │     │        │  │  │  │  ├─ tags.cpython-312.pyc
   │     │        │  │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  │  ├─ _manylinux.py
   │     │        │  │  │  ├─ _musllinux.py
   │     │        │  │  │  ├─ _structures.py
   │     │        │  │  │  ├─ markers.py
   │     │        │  │  │  ├─ requirements.py
   │     │        │  │  │  ├─ specifiers.py
   │     │        │  │  │  ├─ tags.py
   │     │        │  │  │  ├─ utils.py
   │     │        │  │  │  └─ version.py
   │     │        │  │  ├─ pkg_resources
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  └─ __pycache__
   │     │        │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  ├─ platformdirs
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ android.cpython-312.pyc
   │     │        │  │  │  │  ├─ api.cpython-312.pyc
   │     │        │  │  │  │  ├─ macos.cpython-312.pyc
   │     │        │  │  │  │  ├─ unix.cpython-312.pyc
   │     │        │  │  │  │  ├─ version.cpython-312.pyc
   │     │        │  │  │  │  └─ windows.cpython-312.pyc
   │     │        │  │  │  ├─ android.py
   │     │        │  │  │  ├─ api.py
   │     │        │  │  │  ├─ macos.py
   │     │        │  │  │  ├─ unix.py
   │     │        │  │  │  ├─ version.py
   │     │        │  │  │  └─ windows.py
   │     │        │  │  ├─ pygments
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ cmdline.cpython-312.pyc
   │     │        │  │  │  │  ├─ console.cpython-312.pyc
   │     │        │  │  │  │  ├─ filter.cpython-312.pyc
   │     │        │  │  │  │  ├─ formatter.cpython-312.pyc
   │     │        │  │  │  │  ├─ lexer.cpython-312.pyc
   │     │        │  │  │  │  ├─ modeline.cpython-312.pyc
   │     │        │  │  │  │  ├─ plugin.cpython-312.pyc
   │     │        │  │  │  │  ├─ regexopt.cpython-312.pyc
   │     │        │  │  │  │  ├─ scanner.cpython-312.pyc
   │     │        │  │  │  │  ├─ sphinxext.cpython-312.pyc
   │     │        │  │  │  │  ├─ style.cpython-312.pyc
   │     │        │  │  │  │  ├─ token.cpython-312.pyc
   │     │        │  │  │  │  ├─ unistring.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ cmdline.py
   │     │        │  │  │  ├─ console.py
   │     │        │  │  │  ├─ filter.py
   │     │        │  │  │  ├─ filters
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ formatter.py
   │     │        │  │  │  ├─ formatters
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _mapping.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ bbcode.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ groff.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ html.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ img.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ irc.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ latex.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ other.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ pangomarkup.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ rtf.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ svg.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ terminal.cpython-312.pyc
   │     │        │  │  │  │  │  └─ terminal256.cpython-312.pyc
   │     │        │  │  │  │  ├─ _mapping.py
   │     │        │  │  │  │  ├─ bbcode.py
   │     │        │  │  │  │  ├─ groff.py
   │     │        │  │  │  │  ├─ html.py
   │     │        │  │  │  │  ├─ img.py
   │     │        │  │  │  │  ├─ irc.py
   │     │        │  │  │  │  ├─ latex.py
   │     │        │  │  │  │  ├─ other.py
   │     │        │  │  │  │  ├─ pangomarkup.py
   │     │        │  │  │  │  ├─ rtf.py
   │     │        │  │  │  │  ├─ svg.py
   │     │        │  │  │  │  ├─ terminal.py
   │     │        │  │  │  │  └─ terminal256.py
   │     │        │  │  │  ├─ lexer.py
   │     │        │  │  │  ├─ lexers
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _mapping.cpython-312.pyc
   │     │        │  │  │  │  │  └─ python.cpython-312.pyc
   │     │        │  │  │  │  ├─ _mapping.py
   │     │        │  │  │  │  └─ python.py
   │     │        │  │  │  ├─ modeline.py
   │     │        │  │  │  ├─ plugin.py
   │     │        │  │  │  ├─ regexopt.py
   │     │        │  │  │  ├─ scanner.py
   │     │        │  │  │  ├─ sphinxext.py
   │     │        │  │  │  ├─ style.py
   │     │        │  │  │  ├─ styles
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ token.py
   │     │        │  │  │  ├─ unistring.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ pyparsing
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ actions.cpython-312.pyc
   │     │        │  │  │  │  ├─ common.cpython-312.pyc
   │     │        │  │  │  │  ├─ core.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ helpers.cpython-312.pyc
   │     │        │  │  │  │  ├─ results.cpython-312.pyc
   │     │        │  │  │  │  ├─ testing.cpython-312.pyc
   │     │        │  │  │  │  ├─ unicode.cpython-312.pyc
   │     │        │  │  │  │  └─ util.cpython-312.pyc
   │     │        │  │  │  ├─ actions.py
   │     │        │  │  │  ├─ common.py
   │     │        │  │  │  ├─ core.py
   │     │        │  │  │  ├─ diagram
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  └─ __pycache__
   │     │        │  │  │  │     └─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ helpers.py
   │     │        │  │  │  ├─ results.py
   │     │        │  │  │  ├─ testing.py
   │     │        │  │  │  ├─ unicode.py
   │     │        │  │  │  └─ util.py
   │     │        │  │  ├─ pyproject_hooks
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  │  │  └─ _impl.cpython-312.pyc
   │     │        │  │  │  ├─ _compat.py
   │     │        │  │  │  ├─ _impl.py
   │     │        │  │  │  └─ _in_process
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  └─ _in_process.cpython-312.pyc
   │     │        │  │  │     └─ _in_process.py
   │     │        │  │  ├─ requests
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _internal_utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ adapters.cpython-312.pyc
   │     │        │  │  │  │  ├─ api.cpython-312.pyc
   │     │        │  │  │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  │  │  ├─ certs.cpython-312.pyc
   │     │        │  │  │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  │  │  ├─ cookies.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ help.cpython-312.pyc
   │     │        │  │  │  │  ├─ hooks.cpython-312.pyc
   │     │        │  │  │  │  ├─ models.cpython-312.pyc
   │     │        │  │  │  │  ├─ packages.cpython-312.pyc
   │     │        │  │  │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  │  │  ├─ status_codes.cpython-312.pyc
   │     │        │  │  │  │  ├─ structures.cpython-312.pyc
   │     │        │  │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ __version__.py
   │     │        │  │  │  ├─ _internal_utils.py
   │     │        │  │  │  ├─ adapters.py
   │     │        │  │  │  ├─ api.py
   │     │        │  │  │  ├─ auth.py
   │     │        │  │  │  ├─ certs.py
   │     │        │  │  │  ├─ compat.py
   │     │        │  │  │  ├─ cookies.py
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ help.py
   │     │        │  │  │  ├─ hooks.py
   │     │        │  │  │  ├─ models.py
   │     │        │  │  │  ├─ packages.py
   │     │        │  │  │  ├─ sessions.py
   │     │        │  │  │  ├─ status_codes.py
   │     │        │  │  │  ├─ structures.py
   │     │        │  │  │  └─ utils.py
   │     │        │  │  ├─ resolvelib
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ providers.cpython-312.pyc
   │     │        │  │  │  │  ├─ reporters.cpython-312.pyc
   │     │        │  │  │  │  ├─ resolvers.cpython-312.pyc
   │     │        │  │  │  │  └─ structs.cpython-312.pyc
   │     │        │  │  │  ├─ compat
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ collections_abc.cpython-312.pyc
   │     │        │  │  │  │  └─ collections_abc.py
   │     │        │  │  │  ├─ providers.py
   │     │        │  │  │  ├─ reporters.py
   │     │        │  │  │  ├─ resolvers.py
   │     │        │  │  │  └─ structs.py
   │     │        │  │  ├─ rich
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __main__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _cell_widths.cpython-312.pyc
   │     │        │  │  │  │  ├─ _emoji_codes.cpython-312.pyc
   │     │        │  │  │  │  ├─ _emoji_replace.cpython-312.pyc
   │     │        │  │  │  │  ├─ _export_format.cpython-312.pyc
   │     │        │  │  │  │  ├─ _extension.cpython-312.pyc
   │     │        │  │  │  │  ├─ _fileno.cpython-312.pyc
   │     │        │  │  │  │  ├─ _inspect.cpython-312.pyc
   │     │        │  │  │  │  ├─ _log_render.cpython-312.pyc
   │     │        │  │  │  │  ├─ _loop.cpython-312.pyc
   │     │        │  │  │  │  ├─ _null_file.cpython-312.pyc
   │     │        │  │  │  │  ├─ _palettes.cpython-312.pyc
   │     │        │  │  │  │  ├─ _pick.cpython-312.pyc
   │     │        │  │  │  │  ├─ _ratio.cpython-312.pyc
   │     │        │  │  │  │  ├─ _spinners.cpython-312.pyc
   │     │        │  │  │  │  ├─ _stack.cpython-312.pyc
   │     │        │  │  │  │  ├─ _timer.cpython-312.pyc
   │     │        │  │  │  │  ├─ _win32_console.cpython-312.pyc
   │     │        │  │  │  │  ├─ _windows.cpython-312.pyc
   │     │        │  │  │  │  ├─ _windows_renderer.cpython-312.pyc
   │     │        │  │  │  │  ├─ _wrap.cpython-312.pyc
   │     │        │  │  │  │  ├─ abc.cpython-312.pyc
   │     │        │  │  │  │  ├─ align.cpython-312.pyc
   │     │        │  │  │  │  ├─ ansi.cpython-312.pyc
   │     │        │  │  │  │  ├─ bar.cpython-312.pyc
   │     │        │  │  │  │  ├─ box.cpython-312.pyc
   │     │        │  │  │  │  ├─ cells.cpython-312.pyc
   │     │        │  │  │  │  ├─ color.cpython-312.pyc
   │     │        │  │  │  │  ├─ color_triplet.cpython-312.pyc
   │     │        │  │  │  │  ├─ columns.cpython-312.pyc
   │     │        │  │  │  │  ├─ console.cpython-312.pyc
   │     │        │  │  │  │  ├─ constrain.cpython-312.pyc
   │     │        │  │  │  │  ├─ containers.cpython-312.pyc
   │     │        │  │  │  │  ├─ control.cpython-312.pyc
   │     │        │  │  │  │  ├─ default_styles.cpython-312.pyc
   │     │        │  │  │  │  ├─ diagnose.cpython-312.pyc
   │     │        │  │  │  │  ├─ emoji.cpython-312.pyc
   │     │        │  │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  │  ├─ file_proxy.cpython-312.pyc
   │     │        │  │  │  │  ├─ filesize.cpython-312.pyc
   │     │        │  │  │  │  ├─ highlighter.cpython-312.pyc
   │     │        │  │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  │  ├─ jupyter.cpython-312.pyc
   │     │        │  │  │  │  ├─ layout.cpython-312.pyc
   │     │        │  │  │  │  ├─ live.cpython-312.pyc
   │     │        │  │  │  │  ├─ live_render.cpython-312.pyc
   │     │        │  │  │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  │  │  ├─ markup.cpython-312.pyc
   │     │        │  │  │  │  ├─ measure.cpython-312.pyc
   │     │        │  │  │  │  ├─ padding.cpython-312.pyc
   │     │        │  │  │  │  ├─ pager.cpython-312.pyc
   │     │        │  │  │  │  ├─ palette.cpython-312.pyc
   │     │        │  │  │  │  ├─ panel.cpython-312.pyc
   │     │        │  │  │  │  ├─ pretty.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress.cpython-312.pyc
   │     │        │  │  │  │  ├─ progress_bar.cpython-312.pyc
   │     │        │  │  │  │  ├─ prompt.cpython-312.pyc
   │     │        │  │  │  │  ├─ protocol.cpython-312.pyc
   │     │        │  │  │  │  ├─ region.cpython-312.pyc
   │     │        │  │  │  │  ├─ repr.cpython-312.pyc
   │     │        │  │  │  │  ├─ rule.cpython-312.pyc
   │     │        │  │  │  │  ├─ scope.cpython-312.pyc
   │     │        │  │  │  │  ├─ screen.cpython-312.pyc
   │     │        │  │  │  │  ├─ segment.cpython-312.pyc
   │     │        │  │  │  │  ├─ spinner.cpython-312.pyc
   │     │        │  │  │  │  ├─ status.cpython-312.pyc
   │     │        │  │  │  │  ├─ style.cpython-312.pyc
   │     │        │  │  │  │  ├─ styled.cpython-312.pyc
   │     │        │  │  │  │  ├─ syntax.cpython-312.pyc
   │     │        │  │  │  │  ├─ table.cpython-312.pyc
   │     │        │  │  │  │  ├─ terminal_theme.cpython-312.pyc
   │     │        │  │  │  │  ├─ text.cpython-312.pyc
   │     │        │  │  │  │  ├─ theme.cpython-312.pyc
   │     │        │  │  │  │  ├─ themes.cpython-312.pyc
   │     │        │  │  │  │  ├─ traceback.cpython-312.pyc
   │     │        │  │  │  │  └─ tree.cpython-312.pyc
   │     │        │  │  │  ├─ _cell_widths.py
   │     │        │  │  │  ├─ _emoji_codes.py
   │     │        │  │  │  ├─ _emoji_replace.py
   │     │        │  │  │  ├─ _export_format.py
   │     │        │  │  │  ├─ _extension.py
   │     │        │  │  │  ├─ _fileno.py
   │     │        │  │  │  ├─ _inspect.py
   │     │        │  │  │  ├─ _log_render.py
   │     │        │  │  │  ├─ _loop.py
   │     │        │  │  │  ├─ _null_file.py
   │     │        │  │  │  ├─ _palettes.py
   │     │        │  │  │  ├─ _pick.py
   │     │        │  │  │  ├─ _ratio.py
   │     │        │  │  │  ├─ _spinners.py
   │     │        │  │  │  ├─ _stack.py
   │     │        │  │  │  ├─ _timer.py
   │     │        │  │  │  ├─ _win32_console.py
   │     │        │  │  │  ├─ _windows.py
   │     │        │  │  │  ├─ _windows_renderer.py
   │     │        │  │  │  ├─ _wrap.py
   │     │        │  │  │  ├─ abc.py
   │     │        │  │  │  ├─ align.py
   │     │        │  │  │  ├─ ansi.py
   │     │        │  │  │  ├─ bar.py
   │     │        │  │  │  ├─ box.py
   │     │        │  │  │  ├─ cells.py
   │     │        │  │  │  ├─ color.py
   │     │        │  │  │  ├─ color_triplet.py
   │     │        │  │  │  ├─ columns.py
   │     │        │  │  │  ├─ console.py
   │     │        │  │  │  ├─ constrain.py
   │     │        │  │  │  ├─ containers.py
   │     │        │  │  │  ├─ control.py
   │     │        │  │  │  ├─ default_styles.py
   │     │        │  │  │  ├─ diagnose.py
   │     │        │  │  │  ├─ emoji.py
   │     │        │  │  │  ├─ errors.py
   │     │        │  │  │  ├─ file_proxy.py
   │     │        │  │  │  ├─ filesize.py
   │     │        │  │  │  ├─ highlighter.py
   │     │        │  │  │  ├─ json.py
   │     │        │  │  │  ├─ jupyter.py
   │     │        │  │  │  ├─ layout.py
   │     │        │  │  │  ├─ live.py
   │     │        │  │  │  ├─ live_render.py
   │     │        │  │  │  ├─ logging.py
   │     │        │  │  │  ├─ markup.py
   │     │        │  │  │  ├─ measure.py
   │     │        │  │  │  ├─ padding.py
   │     │        │  │  │  ├─ pager.py
   │     │        │  │  │  ├─ palette.py
   │     │        │  │  │  ├─ panel.py
   │     │        │  │  │  ├─ pretty.py
   │     │        │  │  │  ├─ progress.py
   │     │        │  │  │  ├─ progress_bar.py
   │     │        │  │  │  ├─ prompt.py
   │     │        │  │  │  ├─ protocol.py
   │     │        │  │  │  ├─ region.py
   │     │        │  │  │  ├─ repr.py
   │     │        │  │  │  ├─ rule.py
   │     │        │  │  │  ├─ scope.py
   │     │        │  │  │  ├─ screen.py
   │     │        │  │  │  ├─ segment.py
   │     │        │  │  │  ├─ spinner.py
   │     │        │  │  │  ├─ status.py
   │     │        │  │  │  ├─ style.py
   │     │        │  │  │  ├─ styled.py
   │     │        │  │  │  ├─ syntax.py
   │     │        │  │  │  ├─ table.py
   │     │        │  │  │  ├─ terminal_theme.py
   │     │        │  │  │  ├─ text.py
   │     │        │  │  │  ├─ theme.py
   │     │        │  │  │  ├─ themes.py
   │     │        │  │  │  ├─ traceback.py
   │     │        │  │  │  └─ tree.py
   │     │        │  │  ├─ six.py
   │     │        │  │  ├─ tenacity
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _asyncio.cpython-312.pyc
   │     │        │  │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  │  ├─ after.cpython-312.pyc
   │     │        │  │  │  │  ├─ before.cpython-312.pyc
   │     │        │  │  │  │  ├─ before_sleep.cpython-312.pyc
   │     │        │  │  │  │  ├─ nap.cpython-312.pyc
   │     │        │  │  │  │  ├─ retry.cpython-312.pyc
   │     │        │  │  │  │  ├─ stop.cpython-312.pyc
   │     │        │  │  │  │  ├─ tornadoweb.cpython-312.pyc
   │     │        │  │  │  │  └─ wait.cpython-312.pyc
   │     │        │  │  │  ├─ _asyncio.py
   │     │        │  │  │  ├─ _utils.py
   │     │        │  │  │  ├─ after.py
   │     │        │  │  │  ├─ before.py
   │     │        │  │  │  ├─ before_sleep.py
   │     │        │  │  │  ├─ nap.py
   │     │        │  │  │  ├─ retry.py
   │     │        │  │  │  ├─ stop.py
   │     │        │  │  │  ├─ tornadoweb.py
   │     │        │  │  │  └─ wait.py
   │     │        │  │  ├─ tomli
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _parser.cpython-312.pyc
   │     │        │  │  │  │  ├─ _re.cpython-312.pyc
   │     │        │  │  │  │  └─ _types.cpython-312.pyc
   │     │        │  │  │  ├─ _parser.py
   │     │        │  │  │  ├─ _re.py
   │     │        │  │  │  └─ _types.py
   │     │        │  │  ├─ typing_extensions.py
   │     │        │  │  ├─ urllib3
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ _collections.cpython-312.pyc
   │     │        │  │  │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  │  ├─ connectionpool.cpython-312.pyc
   │     │        │  │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  │  │  ├─ filepost.cpython-312.pyc
   │     │        │  │  │  │  ├─ poolmanager.cpython-312.pyc
   │     │        │  │  │  │  ├─ request.cpython-312.pyc
   │     │        │  │  │  │  └─ response.cpython-312.pyc
   │     │        │  │  │  ├─ _collections.py
   │     │        │  │  │  ├─ _version.py
   │     │        │  │  │  ├─ connection.py
   │     │        │  │  │  ├─ connectionpool.py
   │     │        │  │  │  ├─ contrib
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ _appengine_environ.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ appengine.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ ntlmpool.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ pyopenssl.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ securetransport.cpython-312.pyc
   │     │        │  │  │  │  │  └─ socks.cpython-312.pyc
   │     │        │  │  │  │  ├─ _appengine_environ.py
   │     │        │  │  │  │  ├─ _securetransport
   │     │        │  │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  │  ├─ bindings.cpython-312.pyc
   │     │        │  │  │  │  │  │  └─ low_level.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ bindings.py
   │     │        │  │  │  │  │  └─ low_level.py
   │     │        │  │  │  │  ├─ appengine.py
   │     │        │  │  │  │  ├─ ntlmpool.py
   │     │        │  │  │  │  ├─ pyopenssl.py
   │     │        │  │  │  │  ├─ securetransport.py
   │     │        │  │  │  │  └─ socks.py
   │     │        │  │  │  ├─ exceptions.py
   │     │        │  │  │  ├─ fields.py
   │     │        │  │  │  ├─ filepost.py
   │     │        │  │  │  ├─ packages
   │     │        │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  └─ six.cpython-312.pyc
   │     │        │  │  │  │  ├─ backports
   │     │        │  │  │  │  │  ├─ __init__.py
   │     │        │  │  │  │  │  ├─ __pycache__
   │     │        │  │  │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  │  │  ├─ makefile.cpython-312.pyc
   │     │        │  │  │  │  │  │  └─ weakref_finalize.cpython-312.pyc
   │     │        │  │  │  │  │  ├─ makefile.py
   │     │        │  │  │  │  │  └─ weakref_finalize.py
   │     │        │  │  │  │  └─ six.py
   │     │        │  │  │  ├─ poolmanager.py
   │     │        │  │  │  ├─ request.py
   │     │        │  │  │  ├─ response.py
   │     │        │  │  │  └─ util
   │     │        │  │  │     ├─ __init__.py
   │     │        │  │  │     ├─ __pycache__
   │     │        │  │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │     │  ├─ connection.cpython-312.pyc
   │     │        │  │  │     │  ├─ proxy.cpython-312.pyc
   │     │        │  │  │     │  ├─ queue.cpython-312.pyc
   │     │        │  │  │     │  ├─ request.cpython-312.pyc
   │     │        │  │  │     │  ├─ response.cpython-312.pyc
   │     │        │  │  │     │  ├─ retry.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssl_.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssl_match_hostname.cpython-312.pyc
   │     │        │  │  │     │  ├─ ssltransport.cpython-312.pyc
   │     │        │  │  │     │  ├─ timeout.cpython-312.pyc
   │     │        │  │  │     │  ├─ url.cpython-312.pyc
   │     │        │  │  │     │  └─ wait.cpython-312.pyc
   │     │        │  │  │     ├─ connection.py
   │     │        │  │  │     ├─ proxy.py
   │     │        │  │  │     ├─ queue.py
   │     │        │  │  │     ├─ request.py
   │     │        │  │  │     ├─ response.py
   │     │        │  │  │     ├─ retry.py
   │     │        │  │  │     ├─ ssl_.py
   │     │        │  │  │     ├─ ssl_match_hostname.py
   │     │        │  │  │     ├─ ssltransport.py
   │     │        │  │  │     ├─ timeout.py
   │     │        │  │  │     ├─ url.py
   │     │        │  │  │     └─ wait.py
   │     │        │  │  ├─ vendor.txt
   │     │        │  │  └─ webencodings
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ labels.cpython-312.pyc
   │     │        │  │     │  ├─ mklabels.cpython-312.pyc
   │     │        │  │     │  ├─ tests.cpython-312.pyc
   │     │        │  │     │  └─ x_user_defined.cpython-312.pyc
   │     │        │  │     ├─ labels.py
   │     │        │  │     ├─ mklabels.py
   │     │        │  │     ├─ tests.py
   │     │        │  │     └─ x_user_defined.py
   │     │        │  └─ py.typed
   │     │        ├─ pip-23.2.1.dist-info
   │     │        │  ├─ AUTHORS.txt
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ LICENSE.txt
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  └─ top_level.txt
   │     │        ├─ pydantic
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _migration.cpython-312.pyc
   │     │        │  │  ├─ alias_generators.cpython-312.pyc
   │     │        │  │  ├─ aliases.cpython-312.pyc
   │     │        │  │  ├─ annotated_handlers.cpython-312.pyc
   │     │        │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  ├─ color.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ dataclasses.cpython-312.pyc
   │     │        │  │  ├─ datetime_parse.cpython-312.pyc
   │     │        │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  ├─ env_settings.cpython-312.pyc
   │     │        │  │  ├─ error_wrappers.cpython-312.pyc
   │     │        │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ functional_serializers.cpython-312.pyc
   │     │        │  │  ├─ functional_validators.cpython-312.pyc
   │     │        │  │  ├─ generics.cpython-312.pyc
   │     │        │  │  ├─ json.cpython-312.pyc
   │     │        │  │  ├─ json_schema.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ mypy.cpython-312.pyc
   │     │        │  │  ├─ networks.cpython-312.pyc
   │     │        │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  ├─ root_model.cpython-312.pyc
   │     │        │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  ├─ tools.cpython-312.pyc
   │     │        │  │  ├─ type_adapter.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  ├─ typing.cpython-312.pyc
   │     │        │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  ├─ validate_call_decorator.cpython-312.pyc
   │     │        │  │  ├─ validators.cpython-312.pyc
   │     │        │  │  ├─ version.cpython-312.pyc
   │     │        │  │  └─ warnings.cpython-312.pyc
   │     │        │  ├─ _internal
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _config.cpython-312.pyc
   │     │        │  │  │  ├─ _core_metadata.cpython-312.pyc
   │     │        │  │  │  ├─ _core_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _dataclasses.cpython-312.pyc
   │     │        │  │  │  ├─ _decorators.cpython-312.pyc
   │     │        │  │  │  ├─ _decorators_v1.cpython-312.pyc
   │     │        │  │  │  ├─ _discriminated_union.cpython-312.pyc
   │     │        │  │  │  ├─ _docs_extraction.cpython-312.pyc
   │     │        │  │  │  ├─ _fields.cpython-312.pyc
   │     │        │  │  │  ├─ _forward_ref.cpython-312.pyc
   │     │        │  │  │  ├─ _generate_schema.cpython-312.pyc
   │     │        │  │  │  ├─ _generics.cpython-312.pyc
   │     │        │  │  │  ├─ _git.cpython-312.pyc
   │     │        │  │  │  ├─ _import_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _internal_dataclass.cpython-312.pyc
   │     │        │  │  │  ├─ _known_annotated_metadata.cpython-312.pyc
   │     │        │  │  │  ├─ _mock_val_ser.cpython-312.pyc
   │     │        │  │  │  ├─ _model_construction.cpython-312.pyc
   │     │        │  │  │  ├─ _namespace_utils.cpython-312.pyc
   │     │        │  │  │  ├─ _repr.cpython-312.pyc
   │     │        │  │  │  ├─ _schema_gather.cpython-312.pyc
   │     │        │  │  │  ├─ _schema_generation_shared.cpython-312.pyc
   │     │        │  │  │  ├─ _serializers.cpython-312.pyc
   │     │        │  │  │  ├─ _signature.cpython-312.pyc
   │     │        │  │  │  ├─ _typing_extra.cpython-312.pyc
   │     │        │  │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  │  ├─ _validate_call.cpython-312.pyc
   │     │        │  │  │  └─ _validators.cpython-312.pyc
   │     │        │  │  ├─ _config.py
   │     │        │  │  ├─ _core_metadata.py
   │     │        │  │  ├─ _core_utils.py
   │     │        │  │  ├─ _dataclasses.py
   │     │        │  │  ├─ _decorators.py
   │     │        │  │  ├─ _decorators_v1.py
   │     │        │  │  ├─ _discriminated_union.py
   │     │        │  │  ├─ _docs_extraction.py
   │     │        │  │  ├─ _fields.py
   │     │        │  │  ├─ _forward_ref.py
   │     │        │  │  ├─ _generate_schema.py
   │     │        │  │  ├─ _generics.py
   │     │        │  │  ├─ _git.py
   │     │        │  │  ├─ _import_utils.py
   │     │        │  │  ├─ _internal_dataclass.py
   │     │        │  │  ├─ _known_annotated_metadata.py
   │     │        │  │  ├─ _mock_val_ser.py
   │     │        │  │  ├─ _model_construction.py
   │     │        │  │  ├─ _namespace_utils.py
   │     │        │  │  ├─ _repr.py
   │     │        │  │  ├─ _schema_gather.py
   │     │        │  │  ├─ _schema_generation_shared.py
   │     │        │  │  ├─ _serializers.py
   │     │        │  │  ├─ _signature.py
   │     │        │  │  ├─ _typing_extra.py
   │     │        │  │  ├─ _utils.py
   │     │        │  │  ├─ _validate_call.py
   │     │        │  │  └─ _validators.py
   │     │        │  ├─ _migration.py
   │     │        │  ├─ alias_generators.py
   │     │        │  ├─ aliases.py
   │     │        │  ├─ annotated_handlers.py
   │     │        │  ├─ class_validators.py
   │     │        │  ├─ color.py
   │     │        │  ├─ config.py
   │     │        │  ├─ dataclasses.py
   │     │        │  ├─ datetime_parse.py
   │     │        │  ├─ decorator.py
   │     │        │  ├─ deprecated
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  │  ├─ config.cpython-312.pyc
   │     │        │  │  │  ├─ copy_internals.cpython-312.pyc
   │     │        │  │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  │  └─ tools.cpython-312.pyc
   │     │        │  │  ├─ class_validators.py
   │     │        │  │  ├─ config.py
   │     │        │  │  ├─ copy_internals.py
   │     │        │  │  ├─ decorator.py
   │     │        │  │  ├─ json.py
   │     │        │  │  ├─ parse.py
   │     │        │  │  └─ tools.py
   │     │        │  ├─ env_settings.py
   │     │        │  ├─ error_wrappers.py
   │     │        │  ├─ errors.py
   │     │        │  ├─ experimental
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ arguments_schema.cpython-312.pyc
   │     │        │  │  │  ├─ missing_sentinel.cpython-312.pyc
   │     │        │  │  │  └─ pipeline.cpython-312.pyc
   │     │        │  │  ├─ arguments_schema.py
   │     │        │  │  ├─ missing_sentinel.py
   │     │        │  │  └─ pipeline.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ functional_serializers.py
   │     │        │  ├─ functional_validators.py
   │     │        │  ├─ generics.py
   │     │        │  ├─ json.py
   │     │        │  ├─ json_schema.py
   │     │        │  ├─ main.py
   │     │        │  ├─ mypy.py
   │     │        │  ├─ networks.py
   │     │        │  ├─ parse.py
   │     │        │  ├─ plugin
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _loader.cpython-312.pyc
   │     │        │  │  │  └─ _schema_validator.cpython-312.pyc
   │     │        │  │  ├─ _loader.py
   │     │        │  │  └─ _schema_validator.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ root_model.py
   │     │        │  ├─ schema.py
   │     │        │  ├─ tools.py
   │     │        │  ├─ type_adapter.py
   │     │        │  ├─ types.py
   │     │        │  ├─ typing.py
   │     │        │  ├─ utils.py
   │     │        │  ├─ v1
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ _hypothesis_plugin.cpython-312.pyc
   │     │        │  │  │  ├─ annotated_types.cpython-312.pyc
   │     │        │  │  │  ├─ class_validators.cpython-312.pyc
   │     │        │  │  │  ├─ color.cpython-312.pyc
   │     │        │  │  │  ├─ config.cpython-312.pyc
   │     │        │  │  │  ├─ dataclasses.cpython-312.pyc
   │     │        │  │  │  ├─ datetime_parse.cpython-312.pyc
   │     │        │  │  │  ├─ decorator.cpython-312.pyc
   │     │        │  │  │  ├─ env_settings.cpython-312.pyc
   │     │        │  │  │  ├─ error_wrappers.cpython-312.pyc
   │     │        │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  │  ├─ generics.cpython-312.pyc
   │     │        │  │  │  ├─ json.cpython-312.pyc
   │     │        │  │  │  ├─ main.cpython-312.pyc
   │     │        │  │  │  ├─ mypy.cpython-312.pyc
   │     │        │  │  │  ├─ networks.cpython-312.pyc
   │     │        │  │  │  ├─ parse.cpython-312.pyc
   │     │        │  │  │  ├─ schema.cpython-312.pyc
   │     │        │  │  │  ├─ tools.cpython-312.pyc
   │     │        │  │  │  ├─ types.cpython-312.pyc
   │     │        │  │  │  ├─ typing.cpython-312.pyc
   │     │        │  │  │  ├─ utils.cpython-312.pyc
   │     │        │  │  │  ├─ validators.cpython-312.pyc
   │     │        │  │  │  └─ version.cpython-312.pyc
   │     │        │  │  ├─ _hypothesis_plugin.py
   │     │        │  │  ├─ annotated_types.py
   │     │        │  │  ├─ class_validators.py
   │     │        │  │  ├─ color.py
   │     │        │  │  ├─ config.py
   │     │        │  │  ├─ dataclasses.py
   │     │        │  │  ├─ datetime_parse.py
   │     │        │  │  ├─ decorator.py
   │     │        │  │  ├─ env_settings.py
   │     │        │  │  ├─ error_wrappers.py
   │     │        │  │  ├─ errors.py
   │     │        │  │  ├─ fields.py
   │     │        │  │  ├─ generics.py
   │     │        │  │  ├─ json.py
   │     │        │  │  ├─ main.py
   │     │        │  │  ├─ mypy.py
   │     │        │  │  ├─ networks.py
   │     │        │  │  ├─ parse.py
   │     │        │  │  ├─ py.typed
   │     │        │  │  ├─ schema.py
   │     │        │  │  ├─ tools.py
   │     │        │  │  ├─ types.py
   │     │        │  │  ├─ typing.py
   │     │        │  │  ├─ utils.py
   │     │        │  │  ├─ validators.py
   │     │        │  │  └─ version.py
   │     │        │  ├─ validate_call_decorator.py
   │     │        │  ├─ validators.py
   │     │        │  ├─ version.py
   │     │        │  └─ warnings.py
   │     │        ├─ pydantic-2.13.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ pydantic_core
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  └─ core_schema.cpython-312.pyc
   │     │        │  ├─ _pydantic_core.cpython-312-x86_64-linux-gnu.so
   │     │        │  ├─ _pydantic_core.pyi
   │     │        │  ├─ core_schema.py
   │     │        │  └─ py.typed
   │     │        ├─ pydantic_core-2.46.4.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ sboms
   │     │        │     └─ pydantic-core.cyclonedx.json
   │     │        ├─ python_dotenv-1.2.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ entry_points.txt
   │     │        │  ├─ licenses
   │     │        │  │  └─ LICENSE
   │     │        │  └─ top_level.txt
   │     │        ├─ requests
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __version__.cpython-312.pyc
   │     │        │  │  ├─ _internal_utils.cpython-312.pyc
   │     │        │  │  ├─ _types.cpython-312.pyc
   │     │        │  │  ├─ adapters.cpython-312.pyc
   │     │        │  │  ├─ api.cpython-312.pyc
   │     │        │  │  ├─ auth.cpython-312.pyc
   │     │        │  │  ├─ certs.cpython-312.pyc
   │     │        │  │  ├─ compat.cpython-312.pyc
   │     │        │  │  ├─ cookies.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ help.cpython-312.pyc
   │     │        │  │  ├─ hooks.cpython-312.pyc
   │     │        │  │  ├─ models.cpython-312.pyc
   │     │        │  │  ├─ packages.cpython-312.pyc
   │     │        │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  ├─ status_codes.cpython-312.pyc
   │     │        │  │  ├─ structures.cpython-312.pyc
   │     │        │  │  └─ utils.cpython-312.pyc
   │     │        │  ├─ __version__.py
   │     │        │  ├─ _internal_utils.py
   │     │        │  ├─ _types.py
   │     │        │  ├─ adapters.py
   │     │        │  ├─ api.py
   │     │        │  ├─ auth.py
   │     │        │  ├─ certs.py
   │     │        │  ├─ compat.py
   │     │        │  ├─ cookies.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ help.py
   │     │        │  ├─ hooks.py
   │     │        │  ├─ models.py
   │     │        │  ├─ packages.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ sessions.py
   │     │        │  ├─ status_codes.py
   │     │        │  ├─ structures.py
   │     │        │  └─ utils.py
   │     │        ├─ requests-2.34.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ REQUESTED
   │     │        │  ├─ WHEEL
   │     │        │  ├─ licenses
   │     │        │  │  ├─ LICENSE
   │     │        │  │  └─ NOTICE
   │     │        │  └─ top_level.txt
   │     │        ├─ starlette
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _exception_handler.cpython-312.pyc
   │     │        │  │  ├─ _utils.cpython-312.pyc
   │     │        │  │  ├─ applications.cpython-312.pyc
   │     │        │  │  ├─ authentication.cpython-312.pyc
   │     │        │  │  ├─ background.cpython-312.pyc
   │     │        │  │  ├─ concurrency.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ convertors.cpython-312.pyc
   │     │        │  │  ├─ datastructures.cpython-312.pyc
   │     │        │  │  ├─ endpoints.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ formparsers.cpython-312.pyc
   │     │        │  │  ├─ requests.cpython-312.pyc
   │     │        │  │  ├─ responses.cpython-312.pyc
   │     │        │  │  ├─ routing.cpython-312.pyc
   │     │        │  │  ├─ schemas.cpython-312.pyc
   │     │        │  │  ├─ staticfiles.cpython-312.pyc
   │     │        │  │  ├─ status.cpython-312.pyc
   │     │        │  │  ├─ templating.cpython-312.pyc
   │     │        │  │  ├─ testclient.cpython-312.pyc
   │     │        │  │  ├─ types.cpython-312.pyc
   │     │        │  │  └─ websockets.cpython-312.pyc
   │     │        │  ├─ _exception_handler.py
   │     │        │  ├─ _utils.py
   │     │        │  ├─ applications.py
   │     │        │  ├─ authentication.py
   │     │        │  ├─ background.py
   │     │        │  ├─ concurrency.py
   │     │        │  ├─ config.py
   │     │        │  ├─ convertors.py
   │     │        │  ├─ datastructures.py
   │     │        │  ├─ endpoints.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ formparsers.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ authentication.cpython-312.pyc
   │     │        │  │  │  ├─ base.cpython-312.pyc
   │     │        │  │  │  ├─ cors.cpython-312.pyc
   │     │        │  │  │  ├─ errors.cpython-312.pyc
   │     │        │  │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  │  ├─ gzip.cpython-312.pyc
   │     │        │  │  │  ├─ httpsredirect.cpython-312.pyc
   │     │        │  │  │  ├─ sessions.cpython-312.pyc
   │     │        │  │  │  ├─ trustedhost.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ authentication.py
   │     │        │  │  ├─ base.py
   │     │        │  │  ├─ cors.py
   │     │        │  │  ├─ errors.py
   │     │        │  │  ├─ exceptions.py
   │     │        │  │  ├─ gzip.py
   │     │        │  │  ├─ httpsredirect.py
   │     │        │  │  ├─ sessions.py
   │     │        │  │  ├─ trustedhost.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ requests.py
   │     │        │  ├─ responses.py
   │     │        │  ├─ routing.py
   │     │        │  ├─ schemas.py
   │     │        │  ├─ staticfiles.py
   │     │        │  ├─ status.py
   │     │        │  ├─ templating.py
   │     │        │  ├─ testclient.py
   │     │        │  ├─ types.py
   │     │        │  └─ websockets.py
   │     │        ├─ starlette-1.1.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.md
   │     │        ├─ typing_extensions-4.15.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ typing_extensions.py
   │     │        ├─ typing_inspection
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ introspection.cpython-312.pyc
   │     │        │  │  └─ typing_objects.cpython-312.pyc
   │     │        │  ├─ introspection.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ typing_objects.py
   │     │        │  └─ typing_objects.pyi
   │     │        ├─ typing_inspection-0.4.2.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE
   │     │        ├─ urllib3
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ _base_connection.cpython-312.pyc
   │     │        │  │  ├─ _collections.cpython-312.pyc
   │     │        │  │  ├─ _request_methods.cpython-312.pyc
   │     │        │  │  ├─ _version.cpython-312.pyc
   │     │        │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  ├─ connectionpool.cpython-312.pyc
   │     │        │  │  ├─ exceptions.cpython-312.pyc
   │     │        │  │  ├─ fields.cpython-312.pyc
   │     │        │  │  ├─ filepost.cpython-312.pyc
   │     │        │  │  ├─ poolmanager.cpython-312.pyc
   │     │        │  │  └─ response.cpython-312.pyc
   │     │        │  ├─ _base_connection.py
   │     │        │  ├─ _collections.py
   │     │        │  ├─ _request_methods.py
   │     │        │  ├─ _version.py
   │     │        │  ├─ connection.py
   │     │        │  ├─ connectionpool.py
   │     │        │  ├─ contrib
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ pyopenssl.cpython-312.pyc
   │     │        │  │  │  └─ socks.cpython-312.pyc
   │     │        │  │  ├─ emscripten
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  │  ├─ fetch.cpython-312.pyc
   │     │        │  │  │  │  ├─ request.cpython-312.pyc
   │     │        │  │  │  │  └─ response.cpython-312.pyc
   │     │        │  │  │  ├─ connection.py
   │     │        │  │  │  ├─ emscripten_fetch_worker.js
   │     │        │  │  │  ├─ fetch.py
   │     │        │  │  │  ├─ request.py
   │     │        │  │  │  └─ response.py
   │     │        │  │  ├─ pyopenssl.py
   │     │        │  │  └─ socks.py
   │     │        │  ├─ exceptions.py
   │     │        │  ├─ fields.py
   │     │        │  ├─ filepost.py
   │     │        │  ├─ http2
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ connection.cpython-312.pyc
   │     │        │  │  │  └─ probe.cpython-312.pyc
   │     │        │  │  ├─ connection.py
   │     │        │  │  └─ probe.py
   │     │        │  ├─ poolmanager.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ response.py
   │     │        │  └─ util
   │     │        │     ├─ __init__.py
   │     │        │     ├─ __pycache__
   │     │        │     │  ├─ __init__.cpython-312.pyc
   │     │        │     │  ├─ connection.cpython-312.pyc
   │     │        │     │  ├─ proxy.cpython-312.pyc
   │     │        │     │  ├─ request.cpython-312.pyc
   │     │        │     │  ├─ response.cpython-312.pyc
   │     │        │     │  ├─ retry.cpython-312.pyc
   │     │        │     │  ├─ ssl_.cpython-312.pyc
   │     │        │     │  ├─ ssl_match_hostname.cpython-312.pyc
   │     │        │     │  ├─ ssltransport.cpython-312.pyc
   │     │        │     │  ├─ timeout.cpython-312.pyc
   │     │        │     │  ├─ url.cpython-312.pyc
   │     │        │     │  ├─ util.cpython-312.pyc
   │     │        │     │  └─ wait.cpython-312.pyc
   │     │        │     ├─ connection.py
   │     │        │     ├─ proxy.py
   │     │        │     ├─ request.py
   │     │        │     ├─ response.py
   │     │        │     ├─ retry.py
   │     │        │     ├─ ssl_.py
   │     │        │     ├─ ssl_match_hostname.py
   │     │        │     ├─ ssltransport.py
   │     │        │     ├─ timeout.py
   │     │        │     ├─ url.py
   │     │        │     ├─ util.py
   │     │        │     └─ wait.py
   │     │        ├─ urllib3-2.7.0.dist-info
   │     │        │  ├─ INSTALLER
   │     │        │  ├─ METADATA
   │     │        │  ├─ RECORD
   │     │        │  ├─ WHEEL
   │     │        │  └─ licenses
   │     │        │     └─ LICENSE.txt
   │     │        ├─ uvicorn
   │     │        │  ├─ __init__.py
   │     │        │  ├─ __main__.py
   │     │        │  ├─ __pycache__
   │     │        │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  ├─ __main__.cpython-312.pyc
   │     │        │  │  ├─ _compat.cpython-312.pyc
   │     │        │  │  ├─ _subprocess.cpython-312.pyc
   │     │        │  │  ├─ _types.cpython-312.pyc
   │     │        │  │  ├─ config.cpython-312.pyc
   │     │        │  │  ├─ importer.cpython-312.pyc
   │     │        │  │  ├─ logging.cpython-312.pyc
   │     │        │  │  ├─ main.cpython-312.pyc
   │     │        │  │  ├─ server.cpython-312.pyc
   │     │        │  │  └─ workers.cpython-312.pyc
   │     │        │  ├─ _compat.py
   │     │        │  ├─ _subprocess.py
   │     │        │  ├─ _types.py
   │     │        │  ├─ config.py
   │     │        │  ├─ importer.py
   │     │        │  ├─ lifespan
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ off.cpython-312.pyc
   │     │        │  │  │  └─ on.cpython-312.pyc
   │     │        │  │  ├─ off.py
   │     │        │  │  └─ on.py
   │     │        │  ├─ logging.py
   │     │        │  ├─ loops
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asyncio.cpython-312.pyc
   │     │        │  │  │  ├─ auto.cpython-312.pyc
   │     │        │  │  │  └─ uvloop.cpython-312.pyc
   │     │        │  │  ├─ asyncio.py
   │     │        │  │  ├─ auto.py
   │     │        │  │  └─ uvloop.py
   │     │        │  ├─ main.py
   │     │        │  ├─ middleware
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ asgi2.cpython-312.pyc
   │     │        │  │  │  ├─ message_logger.cpython-312.pyc
   │     │        │  │  │  ├─ proxy_headers.cpython-312.pyc
   │     │        │  │  │  └─ wsgi.cpython-312.pyc
   │     │        │  │  ├─ asgi2.py
   │     │        │  │  ├─ message_logger.py
   │     │        │  │  ├─ proxy_headers.py
   │     │        │  │  └─ wsgi.py
   │     │        │  ├─ protocols
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  └─ utils.cpython-312.pyc
   │     │        │  │  ├─ http
   │     │        │  │  │  ├─ __init__.py
   │     │        │  │  │  ├─ __pycache__
   │     │        │  │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  │  ├─ auto.cpython-312.pyc
   │     │        │  │  │  │  ├─ flow_control.cpython-312.pyc
   │     │        │  │  │  │  ├─ h11_impl.cpython-312.pyc
   │     │        │  │  │  │  └─ httptools_impl.cpython-312.pyc
   │     │        │  │  │  ├─ auto.py
   │     │        │  │  │  ├─ flow_control.py
   │     │        │  │  │  ├─ h11_impl.py
   │     │        │  │  │  └─ httptools_impl.py
   │     │        │  │  ├─ utils.py
   │     │        │  │  └─ websockets
   │     │        │  │     ├─ __init__.py
   │     │        │  │     ├─ __pycache__
   │     │        │  │     │  ├─ __init__.cpython-312.pyc
   │     │        │  │     │  ├─ auto.cpython-312.pyc
   │     │        │  │     │  ├─ websockets_impl.cpython-312.pyc
   │     │        │  │     │  ├─ websockets_sansio_impl.cpython-312.pyc
   │     │        │  │     │  └─ wsproto_impl.cpython-312.pyc
   │     │        │  │     ├─ auto.py
   │     │        │  │     ├─ websockets_impl.py
   │     │        │  │     ├─ websockets_sansio_impl.py
   │     │        │  │     └─ wsproto_impl.py
   │     │        │  ├─ py.typed
   │     │        │  ├─ server.py
   │     │        │  ├─ supervisors
   │     │        │  │  ├─ __init__.py
   │     │        │  │  ├─ __pycache__
   │     │        │  │  │  ├─ __init__.cpython-312.pyc
   │     │        │  │  │  ├─ basereload.cpython-312.pyc
   │     │        │  │  │  ├─ multiprocess.cpython-312.pyc
   │     │        │  │  │  ├─ statreload.cpython-312.pyc
   │     │        │  │  │  └─ watchfilesreload.cpython-312.pyc
   │     │        │  │  ├─ basereload.py
   │     │        │  │  ├─ multiprocess.py
   │     │        │  │  ├─ statreload.py
   │     │        │  │  └─ watchfilesreload.py
   │     │        │  └─ workers.py
   │     │        └─ uvicorn-0.48.0.dist-info
   │     │           ├─ INSTALLER
   │     │           ├─ METADATA
   │     │           ├─ RECORD
   │     │           ├─ REQUESTED
   │     │           ├─ WHEEL
   │     │           ├─ entry_points.txt
   │     │           └─ licenses
   │     │              └─ LICENSE.md
   │     └─ pyvenv.cfg
   └─ frontend
      ├─ index.html
      ├─ package.json
      ├─ postcss.config.js
      ├─ src
      │  ├─ App.jsx
      │  ├─ Restricciones.jsx
      │  ├─ api.js
      │  ├─ index.css
      │  └─ main.jsx
      ├─ tailwind.config.js
      └─ vite.config.js

```