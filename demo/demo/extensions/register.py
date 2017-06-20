from demo.demo.extensions.cachebust_static_assets.main import CachebustStaticAssets
from demo.demo.extensions.gzip_static_assets.main import GzipStaticAssets
from demo.demo.extensions.security_headers.main import SecurityHeaders
from demo.demo.extensions.jinja_markdown_filter.main import JinjaMarkdownFilter


# Create empty extension objects here
cachebust_static_assets = CachebustStaticAssets()
gzip_static_assets = GzipStaticAssets()
security_headers = SecurityHeaders()
jinja_markdown_filter = JinjaMarkdownFilter()


def register_extensions(app):
    """Adds any previously created extension objects into the app, and does any further setup they need."""
    cachebust_static_assets.init_app(app)
    gzip_static_assets.init_app(app)
    security_headers.init_app(app)
    jinja_markdown_filter.init_app(app)

    # All done!
    app.logger.info("Extensions registered")
