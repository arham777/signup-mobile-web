from django.urls import path
from .views import SignUpView, ListUsersView

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('users/', ListUsersView.as_view(), name='users' ),
]