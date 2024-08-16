class JWTAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):        
        # Get the access token from the cookies
        access_token = request.COOKIES.get('access')
        
        if access_token:
            # Add the access token to the request headers (AUTHORIZATION)
            request.META['HTTP_AUTHORIZATION'] = f'Bearer {access_token}' 
        # Continue processing the request
        response = self.get_response(request)
        return response