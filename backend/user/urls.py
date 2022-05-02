from django.urls import path
from django.conf.urls import include
from user.views import UserViewSet, ApplicationFormViewSet, MainSlotBookingViewSet,SecondarySlotBookingViewSet,CompanyLogoViewSet
from rest_framework import routers

user_router = routers.DefaultRouter()
form_router = routers.DefaultRouter()
main_slot_booking = routers.DefaultRouter()
secondary_slot_booking = routers.DefaultRouter()
company_logo = routers.DefaultRouter()
user_router.register('users', UserViewSet)
form_router.register('application_form', ApplicationFormViewSet)
main_slot_booking.register('main_booking_slot', MainSlotBookingViewSet)
secondary_slot_booking.register(
    'secondary_booking_slot', SecondarySlotBookingViewSet)
company_logo.register(
    'company_logo', CompanyLogoViewSet)
urlpatterns = [
    path('/', include(user_router.urls)),
    path('/', include(form_router.urls)),
    path('/', include(main_slot_booking.urls)),
    path('/', include(secondary_slot_booking.urls)),
    path('/', include(company_logo.urls)),

]
