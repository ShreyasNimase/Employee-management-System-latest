# from django.conf.urls import url
# from EmployeeApp import views

# from django.conf.urls.static import static
# from django.conf import settings

# urlpatterns=[
#     url(r'^department$',views.departmentApi),
#     url(r'^department/([0-9]+)$',views.departmentApi),

#      url(r'^employee$',views.employeeApi),
#     url(r'^employee/([0-9]+)$',views.employeeApi),

#     url(r'^Employee/SaveFile$',views.SaveFile)

# ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

from django.conf import static
from django.urls import path, include  # Import path and include
from EmployeeApp import views  # Import views from EmployeeApp

from django.conf import settings  # Keep this for settings access

urlpatterns = [
    path('department/', views.departmentApi),  # Use path for department URLs
    path('department/<int:pk>/', views.departmentApi),  # Capture ID with <int:pk>

    path('employee/', views.employeeApi),  # Use path for employee URLs
    path('employee/<int:pk>/', views.employeeApi),  # Capture ID with <int:pk>

    path('Employee/SaveFile', views.SaveFile),  # Use path for SaveFile

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)  # Add static files serving
