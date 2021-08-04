from setuptools import setup, find_packages

setup(
    name="claret-assistant-frontend",
    version="20210707.0",
    description="The Safegate Pro frontend",
    url="https://github.com/safegatepro/home-assistant-polymer",
    author="The Safegate Pro Authors",
    author_email="hello@safegatepro.it",
    license="Apache-2.0",
    packages=find_packages(include=["hass_frontend", "hass_frontend.*"]),
    include_package_data=True,
    zip_safe=False,
)
